import { MaterialContentType } from 'enums/materials';
import { ICourse, ICourseExercise } from 'interfaces/Ientities/Icourses';
import ISkill from 'interfaces/Ientities/ISkill';
import { ITest } from 'interfaces/Ientities/Itest';

import { TBaseRequest, TBaseResponse } from '../base';
import { IIdParams } from '../common/params';

type TSkillShortened = Pick<ISkill, '_id' | 'name' | 'maxScore'>;
type TCourseTechnology = Pick<ISkill, '_id' | 'name'> &
  Pick<ISkill, 'maxScore'> & { points: number };
type TCourseMaterialShortened = {
  type: MaterialContentType;
  material: string;
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
