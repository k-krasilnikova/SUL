import { ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { TCourseTechnology, IMaterial } from 'types/course';
import { IQuestionObject, ITestItem } from 'types/test';

export interface ICourseEditorResponse {
  _id: string;
  title: string;
  description: string;
  complexity: number;
  avatar: string;
  technologies: { _id: string; name: string; points: string; maxScore: number }[];
  materials: {
    type: string;
    material: string;
    exercise?: { eN: number; title: string; task: string; code: string };
  }[];
  test: { _id: string; title: string; questions: IQuestionObject[]; timeout: number };
  allSkills: { _id: string; name: string; maxScore: number }[];
}

export interface IFormik {
  initialValues: {
    technologies: TCourseTechnology[];
    materials: IMaterial[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    test: ITestItem;
  };
  values: {
    technologies: TCourseTechnology[];
    materials: IMaterial[];
    test: ITestItem;
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
  };
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface ICourseEditorProps {
  formik: IFormik;
  courseData?: ICourseEditorResponse;
  isCourseDataLoading?: boolean;
}
export interface IStepProps {
  formik: IFormik;
  courseData?: ICourseEditorResponse;
}
export interface ISkillsStepProps extends IStepProps {
  ungroupedSkills: {
    [key: string]: { group: string; image: string; maxScore: number; name: string; _id: string };
  };
}

export interface ILessonsStepProps extends IStepProps {
  formik: IFormik;
  lessonsContent: {
    [index: number]: { type: string; material: string };
  };
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  material: IMaterial;
  lessonsContent: {
    [index: number]: { type: string; material: string };
  };
  index: number;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

export interface IQuestionItemProps {
  formik: IFormik;
  index: number;
  question?: IQuestionObject;
}
