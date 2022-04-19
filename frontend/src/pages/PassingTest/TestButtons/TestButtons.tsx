import { Box } from '@mui/material';
import React from 'react';

import { MIN_STAGE } from 'constants/test';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ITestButtons } from 'types/test';

import { ButtonsBox, NextButton, PreviousButton, ResultButton } from './styled';

const TestButtons: React.FC<ITestButtons> = ({
  stage,
  stageBack,
  stageNext,
  resultEnabled,
  questionStageItem,
  value,
  handleSubmitResult,
}) => (
  <ButtonsBox>
    <Box>
      {stage > MIN_STAGE && (
        <PreviousButton variant="medium" onClick={stageBack}>
          {ButtonLabels.previous}
        </PreviousButton>
      )}
    </Box>
    {resultEnabled ? (
      <ResultButton
        variant="medium"
        disabled={Boolean(!value[questionStageItem.qN])}
        onClick={handleSubmitResult}
      >
        {ButtonLabels.result}
      </ResultButton>
    ) : (
      <NextButton
        variant="medium"
        onClick={stageNext}
        disabled={Boolean(!value[questionStageItem.qN])}
      >
        {ButtonLabels.next}
      </NextButton>
    )}
  </ButtonsBox>
);

export default TestButtons;
