import { IManageAssessmentDto } from 'types/api.dto';
import { IAssessment } from 'types/request';

export interface IPendingAssessmentsProps {
  isLoading: boolean;
  assessments?: IAssessment[];
  manageAssessment: (payload: IManageAssessmentDto) => void;
  isActionLoading: boolean;
}
