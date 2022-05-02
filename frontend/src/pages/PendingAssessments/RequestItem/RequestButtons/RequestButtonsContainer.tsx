import { FC } from 'react';

import { AssessmentManagmentAction } from 'enums/api';

import RequestButtons from './RequestButtons';
import { IAssessmentRequestButtonsContainerProps } from './types';

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
      {...props}
      approveAssessment={approveAssessment}
      declineAssessment={declineAssessment}
    />
  );
};

export default RequestButtonsContainer;
