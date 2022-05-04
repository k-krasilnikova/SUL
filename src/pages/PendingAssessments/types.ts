import { IManageAssessmentDto } from 'types/api.dto';
import { IAssessment } from 'types/request';
import { ITechnology } from 'types/skill';

export interface IPendingAssessmentsProps {
  isLoading: boolean;
  isActionLoading: boolean;
  manageAssessment: (payload: IManageAssessmentDto) => void;
  assessments?: IAssessment[];
}

export interface IAssessmentRequestItemProps {
  user: IAssessment['user'];
  course: IAssessment['course'];
  elapsed: IAssessment['elapsed'];
  clientCourseId: IAssessment['_id'];
  manageAssessment: (payload: IManageAssessmentDto) => void;
  isActionLoading: boolean;
}

export interface IRequestTechnologiesProps {
  technologies: IAssessment['course']['technologies'];
}

export interface ITechnologyItemProps {
  technology: ITechnology;
  isInfoShown: boolean;
  toggleFullInfoShown: () => void;
}

export interface ITechnologyItemContainerProps {
  technology: ITechnology;
}

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
