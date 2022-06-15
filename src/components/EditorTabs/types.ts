import { IFormik } from 'pages/CourseEditor/types';
import { ReactNode } from 'react';

export interface IEditorTabsContainerProps {
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IEditorTabsProps extends IEditorTabsContainerProps {
  step: number;
  isSubmitEnabled: boolean;
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
