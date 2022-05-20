import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import { StyledButton, ButtonWrapper } from './styled';
import { IActionButtons } from '../types';

const ActionButtons: FC<IActionButtons> = ({
  handlePreviousStep,
  handleNextStep,
  handleSubmit,
  isFirstStep,
  isLastStep,
}) => (
  <ButtonWrapper>
    <StyledButton variant="mediumOutlined" onClick={handlePreviousStep} disabled={isFirstStep}>
      {ButtonLabels.previous}
    </StyledButton>
    <StyledButton variant="mediumContained" onClick={handleNextStep} disabled={isLastStep}>
      {ButtonLabels.next}
    </StyledButton>
    {isLastStep && (
      <StyledButton variant="mediumContained" onClick={handleSubmit}>
        {ButtonLabels.submit}
      </StyledButton>
    )}
  </ButtonWrapper>
);

export default ActionButtons;
