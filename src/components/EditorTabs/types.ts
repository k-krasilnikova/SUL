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
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
  step: number;
  isSubmitEnabled: boolean;
}
