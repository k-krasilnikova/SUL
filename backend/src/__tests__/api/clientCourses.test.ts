import { app } from 'app';
import { STATUS_CODES } from 'config/constants';
import ClientCourseModel from 'db/models/ClientCourses';
import { removeFromPendingFieldCourses } from 'db/providers/userProvider';
import dotenv from 'dotenv';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IUser } from 'interfaces/Ientities/Iusers';
import mongoose from 'mongoose';
import supertest from 'supertest';

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

  it('user can get all client courses', async () => {
    const clientCoursesRes = await request
      .get('/api/clientCourses')
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(clientCoursesRes.status).toBe(STATUS_CODES.success.OK);
    expect(clientCoursesRes.body).toBeInstanceOf(Array);
  });

  it('user can get client course by id', async () => {
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
    const getclientCourse = await request
      .get(`/api/clientCourses/${clientCourseId}`)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(getclientCourse.status).toBe(STATUS_CODES.success.OK);
    const clientCourse = getclientCourse.body as IClientCourse;
    expect(clientCourse._id).toEqual(clientCourseId);
  });

  it("user can't get client course by wrong id", async () => {
    const wrongId = '111111111111';
    const clientCourseRes = await request
      .get(`/api/clientCourses/${wrongId}`)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(clientCourseRes.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
    expect(clientCourseRes.body).toEqual('Course not found.');
  });
});
