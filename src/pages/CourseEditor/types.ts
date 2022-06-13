import { ChangeEvent, ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { IQuestionObject, ITestItem } from 'types/test';

export interface ISkillsById {
  [key: string]: { _id: string; name: string; maxScore: number };
}
export interface ICourseEditorMaterials {
  type: string;
  material: string;
  exercise?: { eN: number; title?: string; task: string; code: string };
}

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
    exercise?: { eN: number; title?: string; task: string; code: string };
  }[];
  test: { _id: string; questions: IQuestionObject[]; timeout: number; title?: string };
  allSkills: { _id: string; name: string; maxScore: number }[];
}

export interface IFormTechnology {
  _id: string;
  name: string;
  points: number;
  maxScore: number;
}

export interface IFormQuestion {
  question: string;
  correctAnswer: number;
  answers: {
    variant: string;
    aN: number;
  }[];
}

export interface IFormik {
  initialValues: {
    technologies: { _id: string; name: string; points: string; maxScore: number }[];
    materials: ICourseEditorMaterials[];
    test: ITestItem;
    title: string;
    complexity: number;
    avatar: string;
    description: string;
  };
  values: {
    technologies: { _id: string; name: string; points: number; maxScore: number }[];
    materials: {
      type: string;
      material: string;
    }[];
    test: ITestItem;
    title: string;
    complexity: number;
    avatar: string;
    description: string;
    skillsById: ISkillsById;
  };
  isValid: boolean;
  setFieldValue: (field: string, value: string | number) => void;
  handleBlur: (event: BaseSyntheticEvent) => void;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  touched: {
    title?: boolean;
    description?: boolean;
    materials?: any;
    technologies?: any;
    test?: any;
  };
  errors: {
    title?: string;
    description?: string;
    materials?: any;
    technologies?: any;
    test?: any;
  };
  handleSubmit: () => void;
  submitForm: () => void;
}

export interface IStepProps {
  formik: IFormik;
  isCourseDataLoading?: boolean;
  courseData?: ICourseEditorResponse;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  onSkillBlur?: (event: BaseSyntheticEvent) => void;
  onSkillPointsBlur?: (event: BaseSyntheticEvent) => void;
}

export interface ISkillsStepProps extends IStepProps {
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICourseEditorProps extends ISkillsStepProps {
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  editCourseDataMutate?: (courseId: string) => void;
  isEditCourseDataMutateLoading?: boolean;
}

export interface ILessonItemProps {
  formik: IFormik;
  material: {
    type: string;
    material: string;
    exercise?: { eN: number; title?: string; task: string; code: string };
  };
  index: number;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
}

export interface IQuestionItemProps {
  formik: IFormik;
  index: number;
  question: IQuestionObject;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
}

export interface IFormValues {
  avatar: string;
  title: string;
  description: string;
  materials: {
    type: string;
    material: string;
  }[];
  technologies: IFormTechnology[];
  test: { title: string; timeout: number; questions: IFormQuestion[] };
}

export interface IFormattedValues {
  avatar: string;
  title: string;
  description: string;
  materials: {
    content: {
      type: string;
      material: string;
    }[];
  }[];
  technologies: { skill: string; points: number }[];
  test: {
    title: string;
    timeout: number;
    questions: IFormQuestion[];
  };
}
