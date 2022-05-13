import { BaseSyntheticEvent } from 'react';

export interface ICourseEditorProps {
  basePath: string;
  formik: IFormik;
}

export interface IFormik {
  initialValues: {
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
    testTitle?: string;
    testDuration?: string;
    testQuestion: string;
    testAnswer: string;
  };
  values: {
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
    testTitle?: string;
    testDuration?: string;
    testQuestion: string;
    testAnswer: string;
  };
  onSubmit?: (event: BaseSyntheticEvent) => void;
  handleChange?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepContainerProps {
  formik: IFormik;
  handleAddMoreLessons?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ITestStepContainerProps {
  formik: IFormik;
}

export interface ITestStepProps {
  formik: IFormik;
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  stageBack?: () => void;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepProps {
  formik: IFormik;
  selectOption: string;
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  stageNext?: () => void;
  stageBack?: () => void;
  handleAddMoreLessons?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ILessonItemProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  isAddMoreLessons?: boolean;
}

export interface ITestItemProps {
  formik: IFormik;
  isCurrentAnswer: string;
  handleChangeAnswer?: (event: BaseSyntheticEvent) => void;
}
