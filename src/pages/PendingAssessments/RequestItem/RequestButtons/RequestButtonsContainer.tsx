import { FC } from 'react';

import { AssessmentManagmentAction } from 'enums/api';
import { IAssessmentRequestButtonsContainerProps } from 'pages/PendingAssessments/types';

import RequestButtons from './RequestButtons';

const RequestButtonsContainer: FC<IAssessmentRequestButtonsContainerProps> = ({
  manageAssessment,
  id,
  ...props
}) => {
  const approveAssessment = () =>
    manageAssessment({ id, action: AssessmentManagmentAction.approve });

  const declineAssessment = () =>
    manageAssessment({ id, action: AssessmentManagmentAction.decline });

  return (
    <RequestButtons
      approveAssessment={approveAssessment}
      declineAssessment={declineAssessment}
      {...props}
    />
  );
};

export default RequestButtonsContainer;
