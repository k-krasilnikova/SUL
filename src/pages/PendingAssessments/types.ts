import { AssessmentManagmentAction } from 'enums/api';
import { IAssessment } from 'types/request';
import { ITechnology } from 'types/skill';

export interface IActionTarget {
  id: string;
  action: AssessmentManagmentAction;
}

export interface IPendingAssessmentsProps {
  actionTarget: IActionTarget;
  isLoading: boolean;
  isActionLoading: boolean;
  approveAssessmentById: (id: string) => void;
  declineAssessmentById: (id: string) => void;
  assessments?: IAssessment[];
}

export interface IAssessmentRequestItemProps
  extends Omit<IPendingAssessmentsProps, 'isLoading' | 'assessments'> {
  user: IAssessment['user'];
  course: IAssessment['course'];
  elapsed: IAssessment['elapsed'];
  clientCourseId: IAssessment['_id'];
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

export interface IAssessmentRequestButtonsContainerProps
  extends Omit<IAssessmentRequestItemProps, 'user' | 'course' | 'elapsed' | 'clientCourseId'> {
  id: IAssessmentRequestItemProps['clientCourseId'];
}

export interface IAssessmentRequestButtonsProps
  extends Pick<IAssessmentRequestButtonsContainerProps, 'id' | 'isActionLoading' | 'actionTarget'> {
  approveAssessment: () => void;
  declineAssessment: () => void;
}
