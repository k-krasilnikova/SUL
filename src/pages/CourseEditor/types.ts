import { ChangeEventHandler, ChangeEvent, BaseSyntheticEvent } from 'react';

import { IQuestionObject, ITestItem } from 'types/test';

export interface ICourseEditorResponse {
  _id: string;
  title: string;
  description: string;
  complexity: number;
  avatar: string;
  technologies: { _id: string; name: string; points: string; maxScore: number }[];
  materials: ICourseEditorMaterials[];
  test: { _id: string; title: string; questions: IQuestionObject[]; timeout: number };
  allSkills: { _id: string; name: string; maxScore: number }[];
}

export interface ISkillsById {
  [key: string]: { _id: string; name: string; maxScore: number };
}

export interface IFormik {
  initialValues: {
    technologies: { _id: string; name: string; points: string; maxScore: number }[];
    materials: ICourseEditorMaterials[];
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    test: ITestItem;
  };
  values: {
    technologies: { _id: string; name: string; points: number; maxScore: number }[];
    materials: ICourseEditorMaterials[];
    test: ITestItem;
    title?: string;
    complexity?: number;
    avatar?: string;
    description?: string;
    skillsById?: ISkillsById;
  };
  setFieldValue: (field: string, value: any) => void;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IStepProps {
  formik: IFormik;
  isCourseDataLoading?: boolean;
  courseData?: ICourseEditorResponse;
}

export interface ICourseEditorProps extends IStepProps {
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ISkillsStepProps extends IStepProps {
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  material: ICourseEditorMaterials;
  index: number;
}

export interface IQuestionItemProps {
  formik: IFormik;
  index: number;
  question: IQuestionObject;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ICourseEditorMaterials {
  type: string;
  material: string;
  exercise?: { eN: number; title: string; task: string; code: string };
}