import { app } from 'app';
import { JEST_TIMEOUT, STATUS_CODES } from 'config/constants';
import ClientCourseModel from 'db/models/ClientCourses';
import { removeFromPendingFieldCourses } from 'db/providers/userProvider';
import dotenv from 'dotenv';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IUser } from 'interfaces/Ientities/Iusers';
import mongoose from 'mongoose';
import supertest from 'supertest';

jest.setTimeout(JEST_TIMEOUT);

describe('testing user apply course', () => {
  let courseId: string;
  let clientCourseId: string;
  let managerId: string;
  const noToken = 'no token';
  let request: supertest.SuperTest<supertest.Test>;
  let userToken: string;

  beforeAll(async () => {
    dotenv.config();
    if (process.env.DATABASE_BACKDEV_URL) {
      const url = process.env.DATABASE_BACKDEV_URL;
      await mongoose.connect(url);
    } else {
      throw new Error('Not connected to BACKDEV DB.');
    }
    request = supertest(app);
    const responseUser = await request
      .post('/api/account/login')
      .send({ login: 'user', password: 'user' });
    const userBody = responseUser.body as IUser;
    userToken = String(userBody.accessToken);
    managerId = String(userBody.managerId);
  });

  afterAll(async () => {
    await ClientCourseModel.findOneAndDelete({ _id: clientCourseId });
    await removeFromPendingFieldCourses(managerId, clientCourseId);
  });

  it('cannot apply no existed course', async () => {
    const applyCourse = await request
      .post('/api/courses')
      .set('Authorization', `bearer ${userToken ?? noToken}`)
      .send({ id: 'no existed id' });
    expect(applyCourse.status).toBe(STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR);
  });

  it('cannot apply course with wrong access token', async () => {
    const applyCourse = await request
      .post('/api/courses')
      .set('Authorization', `bearer ${noToken}`)
      .send({ id: 'no existed id' });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.FORBIDDEN);
  });

  it('user can apply specific course by id', async () => {
    const allCourses = (
      await request.get('/api/courses').set('Authorization', `bearer ${userToken ?? noToken}`)
    ).body as unknown as ICourse[];
    courseId = String(allCourses[0]._id);
    const applyCourse = await request
      .post('/api/courses')
      .set('Authorization', `bearer ${userToken ?? noToken}`)
      .send({ id: courseId });
    const newClientCourse = applyCourse.body as { course: IClientCourse };
    clientCourseId = String(newClientCourse.course._id);
    expect(applyCourse.status).toBe(STATUS_CODES.success.OK);
  });

  it('cannot apply the same course twice', async () => {
    const applyCourse = await request
      .post('/api/courses')
      .set('Authorization', `bearer ${userToken ?? noToken}`)
      .send({ id: courseId });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.BAD_REQUEST);
    expect(applyCourse.body).toBe('Course already applied.');
  });
});
