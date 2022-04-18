import React from 'react';

import { buttonSpinner } from 'animations';
import { BUTTON_CONTENT } from 'constants/requests';
import ButtonLoader from 'components/ButtonLoader';

import { ActionButton, ButtonsContainer, InterviewActionButton } from './styled';

interface RequestProps {
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  id: string;
  isTargetRequest?: boolean;
}

const RequestButtons: React.FC<RequestProps> = ({
  id,
  approveRequest,
  declineRequest,
  approveLoading,
  declineLoading,
  isTargetRequest,
}) => (
  <ButtonsContainer item xs={4} rowSpacing={1}>
    <ActionButton
      variant="mediumContained"
      onClick={() => approveRequest(id)}
      disabled={approveLoading}
    >
      {approveLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        BUTTON_CONTENT.accept
      )}
    </ActionButton>
    <InterviewActionButton
      variant="mediumContained"
      onClick={() => approveRequest(id)}
      disabled={approveLoading}
    >
      {approveLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        BUTTON_CONTENT.acceptWithInterview
      )}
    </InterviewActionButton>
    <ActionButton
      variant="mediumOutlined"
      onClick={() => declineRequest(id)}
      disabled={declineLoading}
    >
      {declineLoading && isTargetRequest ? (
        <ButtonLoader buttonSpinner={buttonSpinner} />
      ) : (
        BUTTON_CONTENT.reject
      )}
    </ActionButton>
  </ButtonsContainer>
);

export default RequestButtons;
