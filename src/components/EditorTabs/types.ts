import { IFormik } from 'pages/CourseEditor/types';
import { ReactNode } from 'react';

export interface IEditorTabsContainerProps {
  scrollToTop: () => void;
  validateStep: (step: number) => boolean;
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IEditorTabsProps {
  step: number;
  isSubmitEnabled: boolean;
  validateStep: (step: number) => boolean;
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IActionButtonsProps {
  step: number;
  isSubmitEnabled: boolean;
  validateStep: (step: number) => boolean;
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
  formik?: IFormik;
  isEditCourseDataMutateLoading?: boolean;
  isCreateCourseMode?: boolean;
}
