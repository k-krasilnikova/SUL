import { ReactNode } from 'react';

export interface IDialogProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: string;
}

export interface IConfirmDialogProps extends Omit<IDialogProps, 'children'> {
  confirmMessage: string;
  confirmButtonLabel: string;
  handleConfirm: () => void;
  declineButtonLabel?: string;
  isLoading?: boolean;
  handleDecline?: () => void;
}
