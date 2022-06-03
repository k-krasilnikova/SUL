/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { app } from 'app';
import { STATUS_CODES } from 'config/constants';
import { IUser } from 'interfaces/Ientities/Iusers';
import { Routes, SubRoutes } from 'enums/routesEnum';
import { login } from 'controllers/auth';

jest.mock('controllers/auth/login/login', () => {
  const originalModule = jest.requireActual('controllers/auth/login/login');

  return {
    __esModule: true,
    default: jest.fn(originalModule.default),
  };
});

describe('Auth tests', () => {
  const noToken = 'no token';
  const loginRoute = `${Routes.namespace}${Routes.account}${SubRoutes.login}`;
  const logoutRoute = `${Routes.namespace}${Routes.account}${SubRoutes.logout}`;
  let userCreds: Record<'login' | 'password', string | undefined>;
  let loginBody: IUser;
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
  });

  afterAll(async () => {
    await dbConnection.disconnect();
  });

  it('Cannot login with empty creds', async () => {
    const emptyCreds = { login: '', password: '' };
    const responseLogin = await request.post(loginRoute).send(emptyCreds);
    expect(login).toHaveBeenCalled();
    expect(responseLogin.status).toBe(STATUS_CODES.clientErrors.NOT_FOUND);
    expect(responseLogin.body).toEqual('User not found.');
  });

  it('Cannot login with wrong creds', async () => {
    const wrongCreds = { login: 'user', password: '12345678' };
    const responseLogin = await request.post(loginRoute).send(wrongCreds);
    expect(login).toHaveBeenCalled();
    expect(responseLogin.status).toBe(STATUS_CODES.clientErrors.UNAUTHORIZED);
    expect(responseLogin.body).toEqual('Password is incorrect.');
  });

  it('Login user', async () => {
    const responseLogin = await request.post(loginRoute).send(userCreds);
    expect(responseLogin.status).toBe(STATUS_CODES.success.OK);
    loginBody = responseLogin.body as IUser;
    userToken = String(loginBody.accessToken);
    expect(login).toHaveBeenCalled();
    expect(loginBody).toHaveProperty('accessToken');
  });

  it('User cannot logout with wrong accessToken', async () => {
    const responseLogout = await request.get(logoutRoute).set('Authorization', `bearer ${noToken}`);
    expect(responseLogout.status).toBe(STATUS_CODES.clientErrors.FORBIDDEN);
    expect(responseLogout.body).toEqual('Invalid access token.');
  });

  it('User logout succeccfuly', async () => {
    const responseLogout = await request
      .get(logoutRoute)
      .set('Authorization', `bearer ${userToken ?? noToken}`);
    expect(responseLogout.status).toBe(STATUS_CODES.success.OK);
  });
});
