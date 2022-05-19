/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import supertest from 'supertest';

import { app } from 'app';
import { JEST_TIMEOUT, STATUS_CODES } from 'config/constants';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IUser } from 'interfaces/Ientities/Iusers';
import { ICoursesMapResponse } from 'interfaces/IResponse/IResponse';

jest.setTimeout(JEST_TIMEOUT);

describe('user endpoints', () => {
  const noToken = 'no token';
  let commonCourses: ICourse[];
  let userToken: string;
  let request: supertest.SuperTest<supertest.Test>;

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
  });

  it('user can get all courses', async () => {
    const response = await request
      .get('/api/courses')
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.length).toBeGreaterThan(0);
    commonCourses = response.body as ICourse[];
  });

  it('user can get info about specific course', async () => {
    const courseId = String(commonCourses[0]._id);
    const response = await request
      .get(`/api/courses/${courseId}`)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const resCourseId = response.body._id as string;
    expect(resCourseId).toEqual(courseId);
  });

  it('user can get materials for specific course', async () => {
    const courseId = String(commonCourses[0]._id);
    const response = await request
      .get(`/api/courses/${courseId}/materials`)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const materialsBody = response.body as { _id: string; materials: ICourse['materials'] };
    expect(materialsBody).toHaveProperty('_id');
    expect(materialsBody).toHaveProperty('materials');
    expect(materialsBody.materials.length).toBeGreaterThan(0);
  });

  it('user can get skills map', async () => {
    const response = await request
      .get(`/api/courses/map`)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const coursesMapBody = response.body as ICoursesMapResponse;
    expect(coursesMapBody).toHaveProperty('userRank');
    expect(coursesMapBody.userRank).not.toBeNull();
    expect(coursesMapBody).toHaveProperty('stackMap');
    expect(coursesMapBody.stackMap).toBeInstanceOf(Array);
    expect(coursesMapBody.stackMap.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
