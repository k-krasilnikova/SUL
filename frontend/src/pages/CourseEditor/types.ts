import { ChangeEventHandler } from 'react';

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
    technologies: { _id: string; name: string; points: string; maxScore: number }[];
    materials: {
      type: string;
      material: string;
      exercise?: { eN: number; title: string; task: string; code: string };
    }[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    test: ITestItem;
  };
  values: {
    technologies: { _id: string; name: string; points: string; maxScore: number }[];
    materials: {
      type: string;
      material: string;
      exercise?: { eN: number; title: string; task: string; code: string };
    }[];
    test: ITestItem;
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    skillsById: any;
  };
  setFieldValue: (field: string, value: any) => void;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface ICourseEditorProps {
  formik: IFormik;
  courseData?: ICourseEditorResponse;
  isCourseDataLoading?: boolean;
  handleChangeTechnology?: ({ target }: any) => void;
}
export interface IStepProps {
  formik: IFormik;
  isCourseDataLoading?: boolean;
  courseData?: ICourseEditorResponse;
}

export type ISkillsStepProps = IStepProps;

export type ILessonsStepProps = IStepProps;

export interface ILessonItemProps {
  formik: IFormik;
  material: {
    type: string;
    material: string;
    exercise?: { eN: number; title: string; task: string; code: string };
  };
  index: number;
}

export interface IQuestionItemProps {
  formik: IFormik;
  index: number;
  question?: IQuestionObject;
}
