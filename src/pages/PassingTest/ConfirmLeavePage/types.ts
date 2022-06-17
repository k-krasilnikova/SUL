export interface IConfirmLeavePageProps {
  isOpened: boolean;
  isLoading: boolean;
  handleCancelLeavePage: () => void;
  handleLeavePage: () => void;
  isCourseEditor?: boolean;
}
