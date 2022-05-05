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
  };
  values: {
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
  };
  onSubmit?: (event: BaseSyntheticEvent) => void;
  handleChange?: (event: BaseSyntheticEvent) => void;
}

export interface ILessonsStepContainerProps {
  formik: IFormik;
}

export interface ILessonsStepProps {
  formik: IFormik;
  selectOption: string;
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  stageNext?: () => void;
  stageBack?: () => void;
}

export interface ILessonItemProps {
  formik: IFormik;
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}
