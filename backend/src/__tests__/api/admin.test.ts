import dotenv from 'dotenv';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { app } from 'app';
import { INITIAL_INDX, JEST_TIMEOUT, STATUS_CODES } from 'config/constants';
import { Routes, SubRoutes } from 'enums/routesEnum';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { TResponsePayload as TLoginPayload } from 'interfaces/requests/auth/login';
import mockedCourse from '__mock__/mockedCourse';
import CourseModel from 'db/models/Course';
import { TResponsePayload as TSkillsPayload } from 'interfaces/requests/skills/getAllSkills';

import { ICreateCourseData } from '../../interfaces/typesForTests/testTypes';

jest.setTimeout(JEST_TIMEOUT);

describe('admin endpoints', () => {
  const numberOfPoits = 5;
  let adminCreds: Record<'login' | 'password', string | undefined>;
  let courseId: string;
  let request: supertest.SuperTest<supertest.Test>;
  let adminToken: string;
  let dbConnection: typeof mongoose;
  let skillId: string;
  let newCourseData: ICreateCourseData;

  beforeAll(async () => {
    dotenv.config();
    adminCreds = { login: process.env.ADMIN_LOGIN, password: process.env.ADMIN_PASSWORD };
    if (!process.env.DATABASE_BACKDEV_URL) {
      throw new Error('Not connected to BACKDEV DB.');
    }
    const url = process.env.DATABASE_BACKDEV_URL;
    dbConnection = await mongoose.connect(url);
    request = supertest(app);
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
  });

  afterAll(async () => {
    await CourseModel.findOneAndDelete({ _id: courseId });
    await dbConnection.connection.close();
  });

  it('admin can get all skills', async () => {
    const allSkillsRes = await request
      .get(`${Routes.namespace}${Routes.skills}`)
      .set('Authorization', `bearer ${adminToken}`);
    expect(allSkillsRes.status).toBe(STATUS_CODES.success.OK);
  });

  it('admin can create course', async () => {
    const newCourseRes = await request
      .post(`${Routes.namespace}${Routes.courses}${SubRoutes.createCourse}`)
      .set('Authorization', `bearer ${adminToken}`)
      .send({ ...newCourseData });
    const newCourse = newCourseRes.body as ICourse;
    courseId = String(newCourse._id);
    expect(newCourseRes.status).toBe(STATUS_CODES.success.OK);
  });
});
