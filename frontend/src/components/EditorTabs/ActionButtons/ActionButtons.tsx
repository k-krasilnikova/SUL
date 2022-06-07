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
  formik,
}) => {
  console.log(formik?.errors);
  return (
    <ButtonWrapper>
      <Box>
        {step > MIN_STEP && (
          <StyledButton
            variant="mediumOutlined"
            onClick={handlePreviousStep}
            // disabled={!formik?.isValid}
          >
            {ButtonLabels.previous}
          </StyledButton>
        )}
      </Box>
      {isSubmitEnabled ? (
        <StyledButton variant="medium" disabled={!formik?.isValid} onClick={formik?.submitForm}>
          {ButtonLabels.submit}
        </StyledButton>
      ) : (
        <StyledButton
          variant="medium"
          onClick={handleNextStep}
          // disabled={!formik?.isValid}
        >
          {ButtonLabels.next}
        </StyledButton>
      )}
    </ButtonWrapper>
  );
};

export default ActionButtons;
