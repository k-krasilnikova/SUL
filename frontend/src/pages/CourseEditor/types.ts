import { ChangeEvent, ChangeEventHandler, BaseSyntheticEvent } from 'react';

import { IQuestionObject, ITestItem } from 'types/test';

export interface ISkillsById {
  [key: string]: { _id: string; name: string; maxScore: number };
}

export interface ICourseEditorResponse {
  _id: string;
  title: string;
  description: string;
  complexity: number;
  avatar: string;
  technologies: { _id: string; name: string; points: number; maxScore: number }[];
  materials: {
    type: string;
    material: string;
    exercise?: { eN: number; title?: string; task: string; code: string };
  }[];
  test: { _id: string; questions: IQuestionObject[]; timeout: number; title?: string };
  allSkills: { _id: string; name: string; maxScore: number }[];
}

export interface IFormik {
  initialValues: {
    technologies: { _id: string; name: string; points: number; maxScore: number }[];
    materials: { type: string; material: string }[];
    test: {
      _id: string;
      questions: {
        correctAnswer: number;
        qN: number;
        question: string;
        answers: { aN: number; variant: string; _id: string }[];
      }[];
    };
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
  setFieldValue: (field: string, value: string | number) => void;
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
  onSubmit?: () => void;
}

export interface IStepProps {
  formik: IFormik;
  isCourseDataLoading?: boolean;
  courseData?: ICourseEditorResponse;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  isCreateCourseMode?: boolean;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
}

export interface ISkillsStepProps extends IStepProps {
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
  ungroupedSkills: { [p: string]: { _id: string; maxScore: number; name: string; points: number } };
}

export interface ICourseEditorProps extends ISkillsStepProps {
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
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
