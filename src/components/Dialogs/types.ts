import { ReactNode } from 'react';

import { TSizeVariants } from 'types/size';

export interface IDialogProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: TSizeVariants;
}

export interface IConfirmDialogProps extends Omit<IDialogProps, 'children'> {
  confirmMessage: string;
  confirmButtonLabel: string;
  handleConfirm: () => void;
  declineButtonLabel?: string;
  isLoading?: boolean;
  handleDecline?: () => void;
}

export interface IConfirmLeavePageProps {
  isOpened: boolean;
  isLoading: boolean;
  handleCancelLeavePage: () => void;
  handleLeavePage: () => void;
  isCourseEditor?: boolean;
}
