import { FC } from 'react';

import { buttonSpinner } from 'animations';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';
import { IRequestButtonsProps } from 'pages/Requests/types';

import { ActionButton, ButtonsContainer, InterviewActionButton } from './styled';

const RequestButtons: FC<IRequestButtonsProps> = ({
  requestId,
  actionTarget,
  isApproveLoading,
  isDeclineLoading,
  approveRequest,
  declineRequest,
}) => {
  const { requestId: actionTargetRequestId, withAssessment } = actionTarget;

  const isCurrentRequest = actionTargetRequestId === requestId;
  const isCurrentApproveRequest = isApproveLoading && isCurrentRequest;
  const isLoading = isApproveLoading || isDeclineLoading;

  const handleApprove = () => approveRequest({ requestId, withAssessment: false });
  const handleApproveWithAssessment = () => approveRequest({ requestId, withAssessment: true });
  const handleDeclineRequest = () => declineRequest(requestId);

  return (
    <ButtonsContainer item xs={12} lg={4} rowSpacing={1}>
      <ActionButton variant="mediumContained" onClick={handleApprove} disabled={isLoading}>
        {isCurrentApproveRequest && !withAssessment ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.accept
        )}
      </ActionButton>
      <InterviewActionButton
        variant="mediumContained"
        onClick={handleApproveWithAssessment}
        disabled={isLoading}
      >
        {isCurrentApproveRequest && withAssessment ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.acceptWithInterview
        )}
      </InterviewActionButton>
      <ActionButton variant="mediumOutlined" onClick={handleDeclineRequest} disabled={isLoading}>
        {isDeclineLoading && isCurrentRequest ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.reject
        )}
      </ActionButton>
    </ButtonsContainer>
  );
};

export default RequestButtons;
