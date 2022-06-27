import { FC } from 'react';

import { IAssessmentRequestButtonsContainerProps } from 'pages/PendingAssessments/types';

import RequestButtons from './RequestButtons';

const RequestButtonsContainer: FC<IAssessmentRequestButtonsContainerProps> = ({
  id,
  approveAssessmentById,
  declineAssessmentById,
  ...props
}) => {
  const approveAssessment = () => approveAssessmentById(id);
  const declineAssessment = () => declineAssessmentById(id);

  return (
    <RequestButtons
      id={id}
      approveAssessment={approveAssessment}
      declineAssessment={declineAssessment}
      {...props}
    />
  );
};

export default RequestButtonsContainer;
