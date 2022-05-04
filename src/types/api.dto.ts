import { AssessmentManagmentAction } from 'enums/api';

export interface IApproveCourseDto {
  id: string;
  assessment?: boolean;
}

export interface IManageAssessmentDto {
  id: string;
  action: AssessmentManagmentAction;
}
