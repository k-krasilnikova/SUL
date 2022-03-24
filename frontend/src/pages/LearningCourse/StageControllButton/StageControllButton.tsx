import { FC } from 'react';

import { StageControllButtonWrapper, StageButton } from './styled';

interface IProps {
  isTestEnabled: boolean;
  handleStartTestDialogOpen: () => void;
  handleStageForward: () => void;
}

const StageControllButton: FC<IProps> = ({
  isTestEnabled,
  handleStartTestDialogOpen,
  handleStageForward,
}) => (
  <StageControllButtonWrapper>
    <StageButton
      variant="contained"
      onClick={isTestEnabled ? handleStartTestDialogOpen : handleStageForward}
    >
      {isTestEnabled ? 'Start the Test' : 'Next'}
    </StageButton>
  </StageControllButtonWrapper>
);

export default StageControllButton;
