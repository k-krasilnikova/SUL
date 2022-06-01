/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import supertest from 'supertest';

import { app } from 'app';
import { INITIAL_INDX, JEST_TIMEOUT, NOTHING, STATUS_CODES } from 'config/constants';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IUser } from 'interfaces/Ientities/Iusers';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';
import { Routes, SubRoutes } from 'enums/routesEnum';

jest.setTimeout(JEST_TIMEOUT);

describe('Common courses', () => {
  const coursesRoute = `${Routes.namespace}${Routes.courses}`;
  let userCreds: Record<'login' | 'password', string | undefined>;
  let commonCourses: ICourse[];
  let userToken: string;
  let request: supertest.SuperTest<supertest.Test>;
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

    const userBody = responseUser.body as IUser;
    userToken = String(userBody.accessToken);
  });

  it('User can get all courses', async () => {
    const response = await request.get(coursesRoute).set('Authorization', `bearer ${userToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.length).toBeGreaterThan(NOTHING);
    commonCourses = response.body as ICourse[];
  });

  it('User can get info about specific course', async () => {
    const courseId = String(commonCourses[INITIAL_INDX]._id);
    const response = await request
      .get(`${coursesRoute}/${courseId}`)
      .set('Authorization', `bearer ${userToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const resCourseId = response.body._id as string;
    expect(resCourseId).toEqual(courseId);
  });

  it('User can get materials for specific course', async () => {
    const courseId = String(commonCourses[INITIAL_INDX]._id);
    const response = await request
      .get(`${coursesRoute}/${courseId}/materials`)
      .set('Authorization', `bearer ${userToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const materialsBody = response.body as { _id: string; materials: ICourse['materials'] };
    expect(materialsBody).toHaveProperty('_id');
    expect(materialsBody).toHaveProperty('materials');
    expect(materialsBody.materials.length).toBeGreaterThan(NOTHING);
  });

  it('User can get skills map', async () => {
    const response = await request
      .get(`${coursesRoute}${SubRoutes.getCoursesMap}`)
      .set('Authorization', `bearer ${userToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const coursesMapBody = response.body as ICoursesMapResponse;
    expect(coursesMapBody).toHaveProperty('userRank');
    expect(coursesMapBody.userRank).not.toBeNull();
    expect(coursesMapBody).toHaveProperty('stackMap');
    expect(coursesMapBody.stackMap).toBeInstanceOf(Array);
    expect(coursesMapBody.stackMap.length).toBeGreaterThan(NOTHING);
  });

  afterAll(async () => {
    await dbConnection.connection.close();
  });
});
