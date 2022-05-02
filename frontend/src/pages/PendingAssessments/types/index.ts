import { IManageAssessmentDto } from 'types/api.dto';
import { IAssessment } from 'types/request';

export interface IPendingAssessmentsProps {
  isLoading: boolean;
  isActionLoading: boolean;
  manageAssessment: (payload: IManageAssessmentDto) => void;
  assessments?: IAssessment[];
}
