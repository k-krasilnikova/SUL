import { FC } from 'react';

import { Back, Forward } from 'components/Arrows';

import { StageControllerWrapper, StyledButton, Step } from './styled';

interface IProps {
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  maxStage: number;
  stage: number;
  handleStageBack: () => void;
  handleStageForward: () => void;
}

const StageController: FC<IProps> = ({
  isBackDisabled,
  isForwardDisabled,
  maxStage,
  stage,
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
