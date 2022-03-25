import { FC } from 'react';

import { ActionButtonWrapper, StyledButton } from './styled';

interface IProps {
  isTestEnabled: boolean;
  handleStartTestDialogOpen: () => void;
  handleStageForward: () => void;
}

const enum ActionButtonText {
  START_THE_TEST = 'Start the Text',
  NEXT = 'Next',
}

const ActionButton: FC<IProps> = ({
  isTestEnabled,
  handleStartTestDialogOpen,
  handleStageForward,
}) => (
  <ActionButtonWrapper>
    <StyledButton
      variant="contained"
      onClick={isTestEnabled ? handleStartTestDialogOpen : handleStageForward}
    >
      {isTestEnabled ? ActionButtonText.START_THE_TEST : ActionButtonText.NEXT}
    </StyledButton>
  </ActionButtonWrapper>
);

export default ActionButton;
