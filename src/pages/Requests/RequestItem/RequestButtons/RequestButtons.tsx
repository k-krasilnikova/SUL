import { FC } from 'react';

import { buttonSpinner } from 'animations';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';

import { ActionButton, ButtonsContainer, InterviewActionButton } from './styled';

interface IRequestProps {
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  id: string;
  isTargetRequest?: boolean;
}

const RequestButtons: FC<IRequestProps> = ({
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
        ButtonLabels.accept
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
        ButtonLabels.acceptWithInterview
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
        ButtonLabels.reject
      )}
    </ActionButton>
  </ButtonsContainer>
);

export default RequestButtons;
