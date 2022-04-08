import { FC } from 'react';

import StartTestButton from 'components/Button/ButtonVariants/StartTestButton';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import { ButtonLabels } from 'constants/ButtonLabels';
import { TEST_DISABLE_DAYS } from 'constants/time';
import { ClientCourse } from 'types/clientCourse';

import { ActionButtonWrapper } from './styled';

interface IProps {
  isTestEnabled: boolean;
  isLoading: boolean;
  handleStageForward: () => void;
  clientCourse?: ClientCourse;
}

const ActionButton: FC<IProps> = ({
  isTestEnabled,
  isLoading,
  clientCourse,
  handleStageForward,
}) => {
  const { status, testDate, progress } = clientCourse || {};

  return (
    <ActionButtonWrapper>
      {isTestEnabled ? (
        <StartTestButton
          status={status}
          testDate={testDate}
          progress={progress}
          timeout={TEST_DISABLE_DAYS}
        />
      ) : (
        <CustomButton disabled={isLoading} variant="contained" onClick={handleStageForward}>
          {isLoading ? ButtonLabels.loading : ButtonLabels.next}
        </CustomButton>
      )}
    </ActionButtonWrapper>
  );
};

export default ActionButton;
