import mongoose from 'mongoose';
import supertest from 'supertest';
import dotenv from 'dotenv';

import { app } from 'app';
import ClientCourseModel from 'db/models/ClientCourses';
import { removeFromPendingFieldCourses } from 'db/providers/userProvider';
import { Routes, SubRoutes } from 'enums/routes';
import { INITIAL_INDX, JEST_TIMEOUT, STATUS_CODES, WRONG_ID } from 'config/constants';
import { IClientCourse } from 'interfaces/entities/clientCourses';
import { ICourse } from 'interfaces/entities/courses';
import { TResponsePayload as TLoginPayload } from 'interfaces/requests/auth/login';
import { TResponsePayload as TUserInfoPayload } from 'interfaces/requests/user/getProfileInfo';

jest.setTimeout(JEST_TIMEOUT);

describe('Testing clientCourses', () => {
  const clientCoursesRoute = '/api/clientCourses';
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

  it('User can get all client courses', async () => {
    const clientCoursesRes = await request
      .get(clientCoursesRoute)
      .set('Authorization', `bearer ${userToken}`);
    expect(clientCoursesRes.status).toBe(STATUS_CODES.success.OK);
    expect(clientCoursesRes.body).toBeInstanceOf(Array);
  });

  it('User can get client course by id', async () => {
    const allCoursesRes = await request
      .get(`${Routes.namespace}${Routes.courses}`)
      .set('Authorization', `bearer ${userToken}`);
    const allCourses = allCoursesRes.body as ICourse[];
    courseId = String(allCourses[INITIAL_INDX]._id);
    const applyCourse = await request
      .post(`${Routes.namespace}${Routes.courses}`)
      .set('Authorization', `bearer ${userToken}`)
      .send({ courseId });

    const course = applyCourse.body as IClientCourse;

    clientCourseId = String(course._id);
    const getclientCourse = await request
      .get(`${clientCoursesRoute}/${clientCourseId}`)
      .set('Authorization', `bearer ${userToken}`);
    expect(getclientCourse.status).toBe(STATUS_CODES.success.OK);
    const clientCourse = getclientCourse.body as IClientCourse;
    expect(clientCourse._id).toEqual(clientCourseId);
  });

  it("User can't get client course by wrong id", async () => {
    const clientCourseRes = await request
      .get(`${clientCoursesRoute}/${WRONG_ID}`)
      .set('Authorization', `bearer ${userToken}`);
    expect(clientCourseRes.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
    expect(clientCourseRes.body).toEqual('Course not found.');
  });
});
