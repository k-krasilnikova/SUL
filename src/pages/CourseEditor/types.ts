import { ChangeEvent, ChangeEventHandler, BaseSyntheticEvent, RefObject } from 'react';

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
    technologies: { _id: string; name: string; points: number | string; maxScore: number }[];
    materials: { type: string; material: string }[];
    test: {
      title: string;
      _id: string;
      questions: {
        correctAnswer: number;
        qN: number;
        question: string;
        answers: { aN: number; variant: string }[];
      }[];
    };
    title: string;
    complexity: number;
    avatar: string;
    description: string;
  };
  values: {
    technologies: { _id: string; name: string; points: number | string; maxScore: number }[];
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
    avatar?: boolean;
    materials?: any;
    technologies?: any;
    test?: any;
  };
  errors: {
    title?: string;
    description?: string;
    avatar?: string;
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
  isCreateCourseMode?: boolean;
  courseData?: ICourseEditorResponse;
  onFieldBlur?: (event: BaseSyntheticEvent) => void;
  handleChangeDuration?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSkillBlur?: (event: BaseSyntheticEvent) => void;
  onSkillPointsBlur?: (event: BaseSyntheticEvent) => void;
  handleAddCourseAvatar?: (event: BaseSyntheticEvent) => void;
}

export interface ISkillsStepProps extends IStepProps {
  ungroupedSkills: { [p: string]: { _id: string; maxScore: number; name: string; points: number } };
  selectedSkills: { [key: string]: boolean };
  handleChangeTechnology?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICourseEditorProps extends ISkillsStepProps {
  scrollToTop: () => void;
  validateStep: () => boolean;
  handleChangeCorrectAnswer?: (event: BaseSyntheticEvent) => void;
  editCourseDataMutate?: (courseId: string) => void;
  isEditCourseDataMutateLoading?: boolean;
  courseEditorRef?: RefObject<HTMLElement>;
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

export interface IMaterial {
  content: { type: string; material: string }[];
  exercise?: {
    eN: number;
    title: string;
    task: string;
    code?: string;
  };
}

export interface IFormValues {
  avatar: string;
  complexity: number;
  title: string;
  description: string;
  materials: {
    type: string;
    material: string;
    exercise: {
      title: string;
      task: string;
    };
  }[];
  technologies: IFormTechnology[];
  test: { title: string; timeout: string; questions: IFormQuestion[] };
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

export interface IImagesUploaderContainer {
  avatarUrl: string;
  onBlur: (event: BaseSyntheticEvent) => void;
  setFieldValue: IFormik['setFieldValue'];
}

export interface IImagesUploader extends Pick<IImagesUploaderContainer, 'avatarUrl'> {
  isUploading: boolean;
  onBlur: (event: BaseSyntheticEvent) => void;
  handleAddCourseAvatar: (event: BaseSyntheticEvent) => void;
}
