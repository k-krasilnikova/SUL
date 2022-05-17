import { FC } from 'react';

import { Back, Forward } from 'components/Arrows';

import { StageControllerWrapper, StyledButton, Step } from './styled';
import { TStageControllerProps } from '../types';

const StageController: FC<TStageControllerProps> = ({
  stage,
  maxStage,
  isBackDisabled,
  isForwardDisabled,
  handleStageBack,
  handleStageForward,
}) => (
  <StageControllerWrapper>
    <StyledButton onClick={handleStageBack} disabled={isBackDisabled}>
      <Back arrowDisabled={isBackDisabled} />
    </StyledButton>
    <Step>
      {stage}/{maxStage}
    </Step>
    <StyledButton onClick={handleStageForward} disabled={isForwardDisabled}>
      <Forward arrowDisabled={isForwardDisabled} />
    </StyledButton>
  </StageControllerWrapper>
);

export default StageController;
