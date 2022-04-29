import { IManageAssessmentDto } from 'types/api.dto';
import { IAssessment } from 'types/request';

export interface IAssessmentRequestItemProps {
  user: IAssessment['user'];
  course: IAssessment['course'];
  elapsed: IAssessment['elapsed'];
  clientCourseId: IAssessment['_id'];
  manageAssessment: (payload: IManageAssessmentDto) => void;
  isActionLoading: boolean;
}
