import { FC } from 'react';

import StartTestButton from 'components/Button/StartTestButton';
import { CustomButton } from 'components/Button/styled';
import { ButtonLabels } from 'components/Button/ButtonsEnums';
import { TEST_DISABLE_DAYS } from 'constants/time';
import { ClientCourse } from 'types/clientCourse';

import { ActionButtonWrapper } from './styled';

interface IProps {
  isTestEnabled: boolean;
  handleStageForward: () => void;
  clientCourse?: ClientCourse;
}

const ActionButton: FC<IProps> = ({ isTestEnabled, clientCourse, handleStageForward }) => {
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
        <CustomButton variant="contained" onClick={handleStageForward}>
          {ButtonLabels.next}
        </CustomButton>
      )}
    </ActionButtonWrapper>
  );
};

export default ActionButton;
