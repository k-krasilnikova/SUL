import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import { StyledButton, ButtonWrapper } from './styled';
import { IActionButtons } from '../types';

const ActionButtons: FC<IActionButtons> = ({ handlePreviousStep, handleNextStep }) => (
  <ButtonWrapper>
    <StyledButton variant="mediumOutlined" onClick={handlePreviousStep}>
      {ButtonLabels.previous}
    </StyledButton>
    <StyledButton variant="mediumContained" onClick={handleNextStep}>
      {ButtonLabels.next}
    </StyledButton>
  </ButtonWrapper>
);

export default ActionButtons;
