import { AssessmentManagmentAction } from 'enums/api';

export interface IApproveCourseDto {
  clientCourseId: string;
  assessment?: boolean;
}

export interface IManageAssessmentDto {
  id: string;
  action: AssessmentManagmentAction;
}
