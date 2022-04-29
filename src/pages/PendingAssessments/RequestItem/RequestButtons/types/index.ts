import { IManageAssessmentDto } from 'types/api.dto';

export interface IAssessmentRequestButtonsProps {
  id: string;
  manageAssessment: (payload: IManageAssessmentDto) => void;
  isActionLoading: boolean;
}
