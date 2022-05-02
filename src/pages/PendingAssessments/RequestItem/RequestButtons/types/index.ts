import { IManageAssessmentDto } from 'types/api.dto';

export interface IAssessmentRequestButtonsContainerProps {
  id: string;
  manageAssessment: (payload: IManageAssessmentDto) => void;
  isActionLoading: boolean;
}

export interface IAssessmentRequestButtonsProps {
  isActionLoading: boolean;
  approveAssessment: () => void;
  declineAssessment: () => void;
}
