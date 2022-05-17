/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { app } from 'app';
import { STATUS_CODES } from 'config/constants';
import login from 'controllers/auth/login';
import dotenv from 'dotenv';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { IUser } from 'interfaces/Ientities/Iusers';
import mongoose from 'mongoose';
import supertest from 'supertest';

jest.mock('controllers/auth/login', () => {
  const originalModule = jest.requireActual('controllers/auth/login');

  return {
    __esModule: true,
    default: jest.fn(originalModule.default),
  };
});

describe('test routing', () => {
  const noToken = 'no token';
  let commonCourses: ICourse[];
  let loginBody: IUser;
  let accesToken: string | undefined;
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
  });

  it('login user', async () => {
    const response = await request
      .post('/api/account/login')
      .send({ login: 'user', password: 'user' });
    expect(response.status).toBe(STATUS_CODES.success.OK);
    loginBody = response.body as IUser;
    expect(login).toHaveBeenCalled();
    accesToken = loginBody.accessToken;
  });

  it('user gets all courses', async () => {
    const response = await request
      .get('/api/courses')
      .set('Authorization', `bearer ${accesToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.length).toBeGreaterThan(0);
    commonCourses = response.body as ICourse[];
  });

  it('user gets info about specific course', async () => {
    const courseId = String(commonCourses[0]._id);
    const response = await request
      .get(`/api/courses/${courseId}`)
      .set('Authorization', `bearer ${accesToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    const resCourseId = response.body._id as string;
    expect(resCourseId).toEqual(courseId);
  });

  it('user gets materials for specific course', async () => {
    let responseBody: { _id: string; materials: ICourse['materials'] };
    const courseId = String(commonCourses[0]._id);
    const response = await request
      .get(`/api/courses/${courseId}/materials`)
      .set('Authorization', `bearer ${accesToken ?? noToken}`);
    expect(response.status).toBe(STATUS_CODES.success.OK);
    expect(response.headers['content-type']).toMatch(/json/);
    responseBody = response.body as { _id: string; materials: ICourse['materials'] };
    expect(responseBody).toHaveProperty('_id');
    expect(responseBody).toHaveProperty('materials');
    expect(responseBody.materials.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
