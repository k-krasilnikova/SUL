import { FC } from 'react';

import { buttonSpinner } from 'animations';
import { AssessmentManagmentAction } from 'enums/api';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { IAssessmentRequestButtonsProps } from 'pages/PendingAssessments/types';

import { StyledActionButton, StyledButtonsContainer } from './styled';

const RequestButtons: FC<IAssessmentRequestButtonsProps> = ({
  id,
  actionTarget,
  isActionLoading,
  approveAssessment,
  declineAssessment,
}) => {
  const { id: requestId, action: actionType } = actionTarget;

  const isCurrentRequestLoading = isActionLoading && id === requestId;

  return (
    <StyledButtonsContainer item xs={12} lg={7} xl={3} rowSpacing={1}>
      <StyledActionButton
        variant="mediumContained"
        disabled={isActionLoading}
        onClick={approveAssessment}
      >
        {isCurrentRequestLoading && actionType === AssessmentManagmentAction.approve ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.approve
        )}
      </StyledActionButton>
      <StyledActionButton
        variant="mediumOutlined"
        disabled={isActionLoading}
        onClick={declineAssessment}
      >
        {isCurrentRequestLoading && actionType === AssessmentManagmentAction.decline ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.decline
        )}
      </StyledActionButton>
    </StyledButtonsContainer>
  );
};

export default RequestButtons;
