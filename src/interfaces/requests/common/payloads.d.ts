import { AssessmentAction } from 'enums/common';

interface ILoginPayload {
  login: string;
  password: string;
}

interface IAssessmentActionPayload {
  action: AssessmentAction;
}

interface IWithAssessmentPayload {
  assessment: boolean;
}

interface IIdPayload {
  id: string;
}

export { ILoginPayload, IAssessmentActionPayload, IWithAssessmentPayload, IIdPayload };
