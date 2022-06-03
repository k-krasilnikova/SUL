import { ReactNode } from 'react';

export interface IEditorTabsProps {
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

export interface IActionButtons {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}
