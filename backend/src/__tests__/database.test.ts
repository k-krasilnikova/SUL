import AccessTokenBlacklistModel from 'db/models/AccessTokens';
import ClientCourseModel from 'db/models/ClientCourses';
import CourseModel from 'db/models/Course';
import NotificationModel from 'db/models/Notification';
import SkillModel from 'db/models/Skill';
import SkillGroupModel from 'db/models/SkillGroup';
import StackMemberModel from 'db/models/StackMember';
import TestModel from 'db/models/Tests';
import UserModel from 'db/models/User';
import UserSkillModel from 'db/models/UserSkill';
import dotenv from 'dotenv';
import { Db, MongoClient } from 'mongodb';
import mongoose from 'mongoose';

describe('database connections', () => {
  let url: string | null;
  let dbName: string | null;
  let connection: MongoClient;
  let db: Db | null;
  let pingRes: Record<string, unknown> | null;
  const successfulMsg = { ok: 1 };
  const ping = { ping: 1 };

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

  it('correctly connect to backdev db through mongodb client', async () => {
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

  it('correctly connect to dev db through mongodb client', async () => {
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

describe('database collections', () => {
  const notEmptyNumber = 0;

  beforeAll(async () => {
    dotenv.config();
    if (process.env.DATABASE_BACKDEV_URL) {
      const url = process.env.DATABASE_BACKDEV_URL;
      await mongoose.connect(url);
    } else {
      throw new Error('Not connected to BACKDEV DB.');
    }
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('courses collection is not empty', async () => {
    const courses = await CourseModel.count();
    expect(courses).not.toBe(notEmptyNumber);
  });

  it(' skillGroups collection is not empty', async () => {
    const skillGroups = await SkillGroupModel.count();
    expect(skillGroups).not.toBe(notEmptyNumber);
  });

  it('skills collection is not empty', async () => {
    const skills = await SkillModel.count();
    expect(skills).not.toBe(notEmptyNumber);
  });

  it('tests collection is not empty', async () => {
    const tests = await TestModel.count();
    expect(tests).not.toBe(notEmptyNumber);
  });

  it('users collection is not empty', async () => {
    const users = await UserModel.count();
    expect(users).not.toBe(notEmptyNumber);
  });

  it('usersSkills collection is not empty', async () => {
    const userSkills = await UserSkillModel.count();
    expect(userSkills).not.toBe(notEmptyNumber);
  });

  it('stackMembers collection is not empty', async () => {
    const stackMembers = await StackMemberModel.count();
    expect(stackMembers).not.toBe(notEmptyNumber);
  });

  it('notifications collection is not empty', async () => {
    const notifications = await NotificationModel.count();
    expect(notifications).not.toBe(notEmptyNumber);
  });

  it('clientCourse collection exists', async () => {
    const clientCourses = await ClientCourseModel.find();
    expect(clientCourses).toBeInstanceOf(Array);
  });

  it('accessTokenBlacklist collection exists', async () => {
    const tokenBlacklist = await AccessTokenBlacklistModel.find();
    expect(tokenBlacklist).toBeInstanceOf(Array);
  });
});
