import dotenv from 'dotenv';
import supertest from 'supertest';

import { Routes, SubRoutes } from 'enums/routesEnum';
import { TResponsePayload as TUserInfoPayload } from 'interfaces/requests/user/getProfileInfo';
import { TResponsePayload as TLoginPayload } from 'interfaces/requests/auth/login';
import { TResponsePayload as TSkillsPayload } from 'interfaces/requests/skills/getAllSkills';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { INITIAL_INDX } from 'config/constants';
import mockedCourse from '__mock__/mockedCourse';

import { ICreateCourseData } from '../../interfaces/typesForTests/testTypes';

const getTokensAndIds = async (req: supertest.SuperTest<supertest.Test>) => {
  dotenv.config();
  const numberOfPoits = 5;
  const userCreds = { login: process.env.USER_LOGIN, password: process.env.USER_PASSWORD };
  const adminCreds = { login: process.env.ADMIN_LOGIN, password: process.env.ADMIN_PASSWORD };

  const responseUser = await req
    .post(`${Routes.namespace}${Routes.account}${SubRoutes.login}`)
    .send(userCreds);
  const userBody = responseUser.body as TLoginPayload;
  const userToken = String(userBody.accessToken);
  const userId = String(userBody._id);
  const userRes = await req
    .get(`${Routes.namespace}${Routes.users}/${userId}`)
    .set('Authorization', `bearer ${userToken}`);
  const userInfo = userRes.body as TUserInfoPayload;
  const managerId = String(userInfo.managerId);

  const responseAdmin = await req
    .post(`${Routes.namespace}${Routes.account}${SubRoutes.login}`)
    .send(adminCreds);
  const adminBody = responseAdmin.body as TLoginPayload;
  const adminToken = adminBody.accessToken;
  const allSkillsRes = await req
    .get(`${Routes.namespace}${Routes.skills}`)
    .set('Authorization', `bearer ${adminToken}`);
  const allSkills = allSkillsRes.body as TSkillsPayload;
  const skillId = String(allSkills[INITIAL_INDX].skills[INITIAL_INDX]._id);
  const newCourseData: ICreateCourseData = { ...mockedCourse };
  newCourseData.technologies.push({ skill: skillId, points: numberOfPoits });

  const newCourseRes = await req
    .post(`${Routes.namespace}${Routes.courses}${SubRoutes.createCourse}`)
    .set('Authorization', `bearer ${adminToken}`)
    .send({ ...newCourseData });
  const newCourse = newCourseRes.body as ICourse;
  const courseId = String(newCourse._id);

  return {
    userToken,
    managerId,
    adminToken,
    courseId,
  };
};

export default getTokensAndIds;
