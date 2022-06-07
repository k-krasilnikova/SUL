import { FC } from 'react';
import { Box } from '@mui/material';

import { ButtonLabels } from 'constants/ButtonLabels';
import { MIN_STEP } from 'constants/courseEditor';

import { StyledButton, ButtonWrapper } from './styled';
import { IActionButtons } from '../types';

const ActionButtons: FC<IActionButtons> = ({
  handlePreviousStep,
  handleNextStep,
  step,
  isSubmitEnabled,
}) => (
  <ButtonWrapper>
    <Box>
      {step > MIN_STEP && (
        <StyledButton variant="mediumOutlined" onClick={handlePreviousStep}>
          {ButtonLabels.previous}
        </StyledButton>
      )}
    </Box>
    {isSubmitEnabled ? (
      <StyledButton variant="medium">{ButtonLabels.submit}</StyledButton>
    ) : (
      <StyledButton variant="medium" onClick={handleNextStep}>
        {ButtonLabels.next}
      </StyledButton>
    )}
  </ButtonWrapper>
);

export default ActionButtons;
