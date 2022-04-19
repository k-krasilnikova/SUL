import React from 'react';

import { buttonSpinner } from 'animations';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';
import { IRequest } from 'types/request';

import { ActionButton, ButtonsContainer, InterviewActionButton } from './styled';

const RequestButtons: React.FC<IRequest> = ({
  request,
  approveRequest,
  declineRequest,
  approveLoading,
  declineLoading,
  isTargetRequest,
}) => (
  <ButtonsContainer item xs={4} rowSpacing={1}>
    <ActionButton
      variant="mediumContained"
      onClick={() => approveRequest(request._id)}
      disabled={approveLoading}
    >
      {approveLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        ButtonLabels.accept
      )}
    </ActionButton>
    <InterviewActionButton
      variant="mediumContained"
      onClick={() => approveRequest(request._id)}
      disabled={approveLoading}
    >
      {approveLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        ButtonLabels.acceptWithInterview
      )}
    </InterviewActionButton>
    <ActionButton
      variant="mediumOutlined"
      onClick={() => declineRequest(request._id)}
      disabled={declineLoading}
    >
      {declineLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        ButtonLabels.reject
      )}
    </ActionButton>
  </ButtonsContainer>
);

export default RequestButtons;
