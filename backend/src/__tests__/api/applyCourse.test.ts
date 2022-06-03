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
import { TResponsePayload as TSkillsPayload } from 'interfaces/requests/skills/getAllSkills';
import mockedCourse from '__mock__/mockedCourse';
import CourseModel from 'db/models/Course';

import { ICreateCourseData } from '../../interfaces/typesForTests/testTypes';

jest.setTimeout(JEST_TIMEOUT);

describe('Testing user apply course', () => {
  const numberOfPoits = 5;
  const applyCourseRoute = `${Routes.namespace}${Routes.courses}`;
  const noToken = 'no token';
  let userCreds: Record<'login' | 'password', string | undefined>;
  let courseId: string;
  let clientCourseId: string;
  let managerId: string;
  let userId: string;
  let userToken: string;
  let request: supertest.SuperTest<supertest.Test>;
  let dbConnection: typeof mongoose;
  let adminCreds: Record<'login' | 'password', string | undefined>;
  let adminToken: string;
  let skillId: string;
  let newCourseData: ICreateCourseData;

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
    adminCreds = { login: process.env.ADMIN_LOGIN, password: process.env.ADMIN_PASSWORD };
    const responseAdmin = await request
      .post(`${Routes.namespace}${Routes.account}${SubRoutes.login}`)
      .send(adminCreds);
    const adminBody = responseAdmin.body as TLoginPayload;
    adminToken = adminBody.accessToken;
    const allSkillsRes = await request
      .get(`${Routes.namespace}${Routes.skills}`)
      .set('Authorization', `bearer ${adminToken}`);
    const allSkills = allSkillsRes.body as TSkillsPayload;
    skillId = String(allSkills[INITIAL_INDX].skills[INITIAL_INDX]._id);
    newCourseData = { ...mockedCourse };
    newCourseData.technologies.push({ skill: skillId, points: numberOfPoits });

    const newCourseRes = await request
      .post(`${Routes.namespace}${Routes.courses}${SubRoutes.createCourse}`)
      .set('Authorization', `bearer ${adminToken}`)
      .send({ ...newCourseData });
    const newCourse = newCourseRes.body as ICourse;
    courseId = String(newCourse._id);
  });

  afterAll(async () => {
    await ClientCourseModel.findOneAndDelete({ _id: clientCourseId });
    await removeFromPendingFieldCourses(managerId, clientCourseId);
    await CourseModel.findOneAndDelete({ _id: courseId });
    await dbConnection.disconnect();
  });

  it('Cannot apply course by no existed id', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ id: WRONG_ID });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
  });

  it('Return 500 error if id is not a string of 12 bytes', async () => {
    const inappropriateId = 'wrong';
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ id: inappropriateId });
    expect(applyCourse.status).toBe(STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR);
  });

  it('Cannot apply course with wrong access token', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${noToken}`)
      .send({ id: courseId });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.FORBIDDEN);
  });

  it('User can apply specific course by id', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ id: courseId });
    const newClientCourse = applyCourse.body as { course: IClientCourse };
    clientCourseId = String(newClientCourse.course._id);
    expect(applyCourse.status).toBe(STATUS_CODES.success.OK);
  });

  it('Cannot apply the same course twice', async () => {
    const applyCourse = await request
      .post(applyCourseRoute)
      .set('Authorization', `bearer ${userToken}`)
      .send({ id: courseId });
    expect(applyCourse.status).toBe(STATUS_CODES.clientErrors.BAD_REQUEST);
    expect(applyCourse.body).toBe('Course already applied.');
  });
});
