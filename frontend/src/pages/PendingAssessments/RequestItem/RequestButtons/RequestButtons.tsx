import { FC } from 'react';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';

import { ActionButton, ButtonsContainer } from './styled';
import { IAssessmentRequestButtonsProps } from './types';

const RequestButtons: FC<IAssessmentRequestButtonsProps> = ({
  approveAssessment,
  declineAssessment,
  isActionLoading,
}) => (
  <ButtonsContainer item xs={3} rowSpacing={1}>
    <ActionButton
      variant={isActionLoading ? 'mediumOutlined' : 'mediumContained'}
      onClick={approveAssessment}
      disabled={isActionLoading}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.approve}
    </ActionButton>
    <ActionButton variant="mediumOutlined" onClick={declineAssessment} disabled={isActionLoading}>
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.decline}
    </ActionButton>
  </ButtonsContainer>
);

export default RequestButtons;
