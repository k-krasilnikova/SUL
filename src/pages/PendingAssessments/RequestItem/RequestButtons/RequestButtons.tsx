import { FC } from 'react';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { IAssessmentRequestButtonsProps } from 'pages/PendingAssessments/types';

import { StyledActionButton, StyledButtonsContainer } from './styled';

const RequestButtons: FC<IAssessmentRequestButtonsProps> = ({
  approveAssessment,
  declineAssessment,
  isActionLoading,
}) => (
  <StyledButtonsContainer item xs={3} rowSpacing={1}>
    <StyledActionButton
      variant={isActionLoading ? 'mediumOutlined' : 'mediumContained'}
      disabled={isActionLoading}
      onClick={approveAssessment}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.approve}
    </StyledActionButton>
    <StyledActionButton
      variant="mediumOutlined"
      disabled={isActionLoading}
      onClick={declineAssessment}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.decline}
    </StyledActionButton>
  </StyledButtonsContainer>
);

export default RequestButtons;
