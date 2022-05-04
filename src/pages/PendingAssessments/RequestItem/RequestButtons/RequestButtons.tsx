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
      disabled={isActionLoading}
      variant={isActionLoading ? 'mediumOutlined' : 'mediumContained'}
      onClick={approveAssessment}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.approve}
    </StyledActionButton>
    <StyledActionButton
      disabled={isActionLoading}
      variant="mediumOutlined"
      onClick={declineAssessment}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.decline}
    </StyledActionButton>
  </StyledButtonsContainer>
);

export default RequestButtons;
