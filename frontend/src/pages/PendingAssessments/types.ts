import { IAssessment } from 'types/request';
import { ITechnology } from 'types/skill';

export interface IPendingAssessmentsProps {
  targetId: string;
  isLoading: boolean;
  isActionLoading: boolean;
  approveAssessmentById: (id: string) => void;
  declineAssessmentById: (id: string) => void;
  assessments?: IAssessment[];
}

export interface IAssessmentRequestItemProps {
  user: IAssessment['user'];
  course: IAssessment['course'];
  elapsed: IAssessment['elapsed'];
  clientCourseId: IAssessment['_id'];
  isActionLoading: boolean;
  isTargetRequest: boolean;
  approveAssessmentById: IPendingAssessmentsProps['approveAssessmentById'];
  declineAssessmentById: IPendingAssessmentsProps['declineAssessmentById'];
}

export interface IRequestTechnologiesProps {
  technologies: IAssessment['course']['technologies'];
}

export interface ITechnologyItemProps {
  technology: ITechnology;
}

export interface ITechnologyItemContainerProps {
  technology: ITechnology;
}

export interface IAssessmentRequestButtonsContainerProps {
  id: string;
  isActionLoading: boolean;
  isTargetRequest: IAssessmentRequestItemProps['isTargetRequest'];
  approveAssessmentById: IPendingAssessmentsProps['approveAssessmentById'];
  declineAssessmentById: IPendingAssessmentsProps['declineAssessmentById'];
}

export interface IAssessmentRequestButtonsProps {
  isActionLoading: boolean;
  isTargetRequest: IAssessmentRequestItemProps['isTargetRequest'];
  approveAssessment: () => void;
  declineAssessment: () => void;
}
