import { IFormik } from 'pages/CourseEditor/types';
import { ReactNode } from 'react';

export interface IEditorTabsContainerProps {
  scrollToTop: () => void;
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IEditorTabsProps {
  step: number;
  isSubmitEnabled: boolean;
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IActionButtons {
  step: number;
  isSubmitEnabled: boolean;
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
  formik?: IFormik;
  isEditCourseDataMutateLoading?: boolean;
  isCreateCourseMode?: boolean;
}
