import { FC } from 'react';
import { Box } from '@mui/material';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
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
  isEditCourseDataMutateLoading,
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
      <StyledButton
        variant="mediumContained"
        disabled={!formik?.isValid || isEditCourseDataMutateLoading}
        onClick={formik?.submitForm}
      >
        {isEditCourseDataMutateLoading ? (
          <ButtonLoader buttonSpinner={buttonSpinner} />
        ) : (
          ButtonLabels.submit
        )}
      </StyledButton>
    ) : (
      <StyledButton variant="mediumContained" disabled={!formik?.isValid} onClick={handleNextStep}>
        {ButtonLabels.next}
      </StyledButton>
    )}
  </ButtonWrapper>
);

export default ActionButtons;
