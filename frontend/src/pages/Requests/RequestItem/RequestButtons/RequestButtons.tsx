import { FC } from 'react';

import { buttonSpinner } from 'animations';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';
import { IApproveCourseDto } from 'types/api.dto';

import { ActionButton, ButtonsContainer, InterviewActionButton } from './styled';

interface IRequestProps {
  approveRequest: (variables: IApproveCourseDto) => void;
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
}) => {
  const isLoading = approveLoading || declineLoading;

  return (
    <ButtonsContainer item xs={12} lg={4} rowSpacing={1}>
      <ActionButton
        variant="mediumContained"
        onClick={() => approveRequest({ clientCourseId: id })}
        disabled={isLoading}
      >
        {isLoading && isTargetRequest ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.accept
        )}
      </ActionButton>
      <InterviewActionButton
        variant="mediumContained"
        onClick={() => approveRequest({ clientCourseId: id, assessment: true })}
        disabled={isLoading}
      >
        {isLoading && isTargetRequest ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.acceptWithInterview
        )}
      </InterviewActionButton>
      <ActionButton
        variant="mediumOutlined"
        onClick={() => declineRequest(id)}
        disabled={isLoading}
      >
        {isLoading && isTargetRequest ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.reject
        )}
      </ActionButton>
    </ButtonsContainer>
  );
};

export default RequestButtons;
