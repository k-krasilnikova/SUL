import dotenv from 'dotenv';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { app } from 'app';
import { INITIAL_INDX, JEST_TIMEOUT, STATUS_CODES, WRONG_ID } from 'config/constants';
import { removeFromPendingFieldCourses } from 'db/providers/userProvider';
import ClientCourseModel from 'db/models/ClientCourses';
import { Routes, SubRoutes } from 'enums/routesEnum';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { TResponsePayload as TUserInfoPayload } from 'interfaces/requests/user/getProfileInfo';
import { TResponsePayload as TLoginPayload } from 'interfaces/requests/auth/login';

jest.setTimeout(JEST_TIMEOUT);

describe('Testing user apply course', () => {
  const applyCourseRoute = `${Routes.namespace}${Routes.courses}`;
  const noToken = 'no token';
  let userCreds: Record<'login' | 'password', string | undefined>;
  let courseId: string;
  let clientCourseId: string;
  let managerId: string;
  let userId: string;
  let request: supertest.SuperTest<supertest.Test>;
  let userToken: string;
  let dbConnection: typeof mongoose;

  beforeAll(async () => {
    dotenv.config();
    userCreds = { login: process.env.USER_LOGIN, password: process.env.USER_PASSWORD };
    if (!process.env.DATABASE_BACKDEV_URL) {
      throw new Error('Not connected to BACKDEV DB.');
    }
    const url = process.env.DATABASE_BACKDEV_URL;
    dbConnection = await mongoose.connect(url);
    request = supertest(app);
    const responseUser = await request
      .post(`${Routes.namespace}${Routes.account}${SubRoutes.login}`)
      .send(userCreds);
    const userBody = responseUser.body as TLoginPayload;
    userToken = String(userBody.accessToken);
    userId = String(userBody._id);
    const userRes = await request
      .get(`${Routes.namespace}${Routes.users}/${userId}`)
      .set('Authorization', `bearer ${userToken}`);
    const userInfo = userRes.body as TUserInfoPayload;
    managerId = String(userInfo.managerId);
  });

  afterAll(async () => {
    await ClientCourseModel.findOneAndDelete({ _id: clientCourseId });
    await removeFromPendingFieldCourses(managerId, clientCourseId);
    await dbConnection.disconnect();
  });

  it('Cannot apply course by no existed id', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ courseId: WRONG_ID });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
  });

  it('Return 500 error if id is not a string of 12 bytes', async () => {
    const inappropriateId = 'wrong';
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ courseId: inappropriateId });
    expect(applyCourse.status).toBe(STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR);
  });

  it('Cannot apply course with wrong access token', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${noToken}`)
      .send({ courseId });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.FORBIDDEN);
  });

  it('User can apply specific course by id', async () => {
    const allCoursesRes = await request
      .get(`${Routes.namespace}${Routes.courses}`)
      .set('Authorization', `bearer ${userToken}`);
    const allCourses = allCoursesRes.body as ICourse[];
    courseId = String(allCourses[INITIAL_INDX]._id);
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ courseId });
    const newClientCourse = applyCourse.body as IClientCourse;
    clientCourseId = String(newClientCourse._id);
    expect(applyCourse.status).toBe(STATUS_CODES.success.OK);
  });

  it('Cannot apply the same course twice', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ courseId });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.BAD_REQUEST);
    expect(applyCourse.body).toBe('Course already applied.');
  });
});
