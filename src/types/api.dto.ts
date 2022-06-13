import { AssessmentManagmentAction } from 'enums/api';

export interface IApproveCourseDto {
  requestId: string;
  withAssessment?: boolean;
}

export interface IManageAssessmentDto {
  id: string;
  action: AssessmentManagmentAction;
}
