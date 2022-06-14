import { MaterialContentType } from 'enums/materials';
import { ICourse, ICourseExercise } from 'interfaces/entities/courses';
import ISkill from 'interfaces/entities/skill';
import { ITest } from 'interfaces/entities/test';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TSkillShortened = Pick<ISkill, '_id' | 'name' | 'maxScore'>;
type TCourseTechnology = Pick<ISkill, '_id' | 'name'> &
  Pick<ISkill, 'maxScore'> & { points: number };
type TCourseMaterialShortened = {
  content: { type: MaterialContentType; material: string }[];
  // type: MaterialContentType;
  // material: string;
  exercise?: ICourseExercise;
};

interface IGetEditCoursePayloadResponse
  extends Pick<ICourse, '_id' | 'title' | 'description' | 'avatar' | 'complexity'> {
  test: ITest;
  allSkills: TSkillShortened[];
  technologies: TCourseTechnology[];
  materials: TCourseMaterialShortened[];
}

type TRequestParams = IIdParams;

type TResponsePayload = IGetEditCoursePayloadResponse;

type TGetEditCoursePayloadRequest = TBaseRequest<TRequestParams>;
type TGetEditCoursePayloadResponse = TBaseResponse<TResponsePayload>;

export {
  TGetEditCoursePayloadRequest,
  TGetEditCoursePayloadResponse,
  IGetEditCoursePayloadResponse,
};
