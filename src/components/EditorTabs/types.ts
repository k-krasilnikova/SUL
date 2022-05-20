import { ReactNode } from 'react';

export interface IEditorTabsProps {
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
  handleSubmit?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

export interface IActionButtons {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
  handleSubmit?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}
