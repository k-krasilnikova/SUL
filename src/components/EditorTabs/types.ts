import { ReactNode } from 'react';

export interface IEditorTabsProps {
  currentChild?: ReactNode;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}

export interface IActionButtons {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
}
