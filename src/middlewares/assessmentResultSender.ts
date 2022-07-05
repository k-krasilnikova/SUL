import {
  TManageAssessmentRequest,
  TManageAssessmentResponse,
} from 'interfaces/requests/clientCourses/manageAssessment';

const assessmentResultSender = (req: TManageAssessmentRequest, res: TManageAssessmentResponse) => {
  const { message } = res.locals;

  res.json(message);
};

export default assessmentResultSender;
