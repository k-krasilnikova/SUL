import { FC } from 'react';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { AssessmentManagmentAction } from 'enums/api';

import { ActionButton, ButtonsContainer } from './styled';
import { IAssessmentRequestButtonsProps } from './types';

const RequestButtons: FC<IAssessmentRequestButtonsProps> = ({
  id,
  manageAssessment,
  isActionLoading,
}) => (
  <ButtonsContainer item xs={2} rowSpacing={1}>
    <ActionButton
      variant="mediumContained"
      onClick={() => manageAssessment({ id, action: AssessmentManagmentAction.approve })}
      disabled={isActionLoading}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.approve}
    </ActionButton>
    <ActionButton
      variant="mediumOutlined"
      onClick={() => manageAssessment({ id, action: AssessmentManagmentAction.decline })}
      disabled={isActionLoading}
    >
      {isActionLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.decline}
    </ActionButton>
  </ButtonsContainer>
);

export default RequestButtons;
