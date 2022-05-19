/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { app } from 'app';
import login from 'controllers/auth/login';
import { STATUS_CODES } from 'config/constants';
import { IUser } from 'interfaces/Ientities/Iusers';

jest.mock('controllers/auth/login', () => {
  const originalModule = jest.requireActual('controllers/auth/login');

  return {
    __esModule: true,
    default: jest.fn(originalModule.default),
  };
});

describe('auth tests', () => {
  const noToken = 'no token';
  let loginBody: IUser;
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
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('cannot login with empty creds', async () => {
    const emptyCreds = { login: '', password: '' };
    const responseLogin = await request.post('/api/account/login').send(emptyCreds);
    expect(login).toHaveBeenCalled();
    expect(responseLogin.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
    expect(responseLogin.body).toEqual('User not found.');
  });

  it('cannot login with wrong creds', async () => {
    const wrongCreds = { login: 'user', password: 'userr' };
    const responseLogin = await request.post('/api/account/login').send(wrongCreds);
    expect(login).toHaveBeenCalled();
    expect(responseLogin.status).toBe(STATUS_CODES.clientErrors.UNAUTHORIZED);
    expect(responseLogin.body).toEqual('Password is incorrect.');
  });

  it('login user', async () => {
    const responseLogin = await request
      .post('/api/account/login')
      .send({ login: 'user', password: 'user' });
    expect(responseLogin.status).toBe(STATUS_CODES.success.OK);
    loginBody = responseLogin.body as IUser;
    userToken = String(loginBody.accessToken);
    expect(login).toHaveBeenCalled();
    expect(loginBody).toHaveProperty('accessToken');
  });

  it('user cannot logout with wrong accessToken', async () => {
    const responseLogout = await request
      .get('/api/account/logout')
      .set('Authorization', `bearer ${noToken}`);
    expect(responseLogout.status).toBe(STATUS_CODES.clientErrors.FORBIDDEN);
    expect(responseLogout.body).toEqual('Invalid access token.');
  });

  it('user logout succeccfuly', async () => {
    const responseLogout = await request
      .get('/api/account/logout')
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(responseLogout.status).toBe(STATUS_CODES.success.OK);
  });
});
