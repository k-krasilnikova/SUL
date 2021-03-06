import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Db, MongoClient } from 'mongodb';

import { JEST_TIMEOUT } from 'config/constants';
import { AccessTokenBlacklistModel } from 'db/models/AccessTokens';
import ClientCourseModel from 'db/models/ClientCourses';
import CourseModel from 'db/models/Course';
import NotificationModel from 'db/models/Notification';
import SkillModel from 'db/models/Skill';
import SkillGroupModel from 'db/models/SkillGroup';
import StackMemberModel from 'db/models/StackMember';
import TestModel from 'db/models/Tests';
import UserModel from 'db/models/User';
import UserSkillModel from 'db/models/UserSkill';

jest.setTimeout(JEST_TIMEOUT);

describe('Database connections', () => {
  const successfulMsg = { ok: 1 };
  const ping = { ping: 1 };
  let url: string | null;
  let dbName: string | null;
  let connection: MongoClient;
  let db: Db | null;
  let pingRes: Record<string, unknown> | null;

  beforeAll(() => {
    dotenv.config();
  });

  afterEach(async () => {
    await connection.close();
    db = null;
    pingRes = null;
    url = null;
    dbName = null;
  });

  it('Correctly connect to backdev db through mongodb client', async () => {
    if (process.env.DATABASE_BACKDEV_URL && process.env.BACKDEV_DB_NAME) {
      url = process.env.DATABASE_BACKDEV_URL;
      dbName = process.env.BACKDEV_DB_NAME;
      connection = new MongoClient(url);
      await connection.connect();
      db = connection.db(dbName);
      pingRes = await db.command(ping);
    }
    expect(pingRes).toEqual(successfulMsg);
  });

  it('Correctly connect to dev db through mongodb client', async () => {
    if (process.env.DATABASE_URL && process.env.DEV_DB_NAME) {
      url = process.env.DATABASE_URL;
      dbName = process.env.DEV_DB_NAME;
      connection = new MongoClient(url);
      await connection.connect();
      db = connection.db(dbName);
      pingRes = await db.command(ping);
    }
    expect(pingRes).toEqual(successfulMsg);
  });
});

describe('Database collections', () => {
  const emptyNumber = 0;
  let mongooseConnection: typeof mongoose;

  beforeAll(async () => {
    dotenv.config();
    if (!process.env.DATABASE_BACKDEV_URL) {
      throw new Error('Not connected to BACKDEV DB.');
    }
    const url = process.env.DATABASE_BACKDEV_URL;
    mongooseConnection = await mongoose.connect(url);
  });

  afterAll(async () => {
    await mongooseConnection.connection.close();
  });

  it('Courses collection is not empty', async () => {
    const courses = await CourseModel.count();
    expect(courses).not.toBe(emptyNumber);
  });

  it('SkillGroups collection is not empty', async () => {
    const skillGroups = await SkillGroupModel.count();
    expect(skillGroups).not.toBe(emptyNumber);
  });

  it('Skills collection is not empty', async () => {
    const skills = await SkillModel.count();
    expect(skills).not.toBe(emptyNumber);
  });

  it('Tests collection is not empty', async () => {
    const tests = await TestModel.count();
    expect(tests).not.toBe(emptyNumber);
  });

  it('Users collection is not empty', async () => {
    const users = await UserModel.count();
    expect(users).not.toBe(emptyNumber);
  });

  it('UsersSkills collection is not empty', async () => {
    const userSkills = await UserSkillModel.count();
    expect(userSkills).not.toBe(emptyNumber);
  });

  it('StackMembers collection is not empty', async () => {
    const stackMembers = await StackMemberModel.count();
    expect(stackMembers).not.toBe(emptyNumber);
  });

  it('Notifications collection is not empty', async () => {
    const notifications = await NotificationModel.count();
    expect(notifications).not.toBe(emptyNumber);
  });

  it('ClientCourse collection exists', async () => {
    const clientCourses = await ClientCourseModel.find();
    expect(clientCourses).toBeInstanceOf(Array);
  });

  it('AccessTokenBlacklist collection exists', async () => {
    const tokenBlacklist = await AccessTokenBlacklistModel.find();
    expect(tokenBlacklist).toBeInstanceOf(Array);
  });
});
