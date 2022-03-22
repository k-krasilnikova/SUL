import withFormTest from 'pages/LearningCourse/FormDialog/withFormDialog';
import React from 'react';
import { compose } from 'recompose';
import { ClientCourse } from 'types/clientCourse';
import { MyButton } from './styled';
import withTimeLeft from './withTimeLeft';

interface IProps {
  handleDialogOpen?: () => void;
  isTestEnable: boolean;
}

type TOutterProps = {
  status: string;
  testDate?: string;
  applyDate?: string;
  timeout: number;
  progress?: ClientCourse['progress'];
};

const StartTestButton: React.FC<IProps> = ({ handleDialogOpen, isTestEnable }) => {
  return (
    <MyButton variant="mediumContained" disabled={!isTestEnable} onClick={handleDialogOpen}>
      Start Test
    </MyButton>
  );
};

export default compose<IProps, TOutterProps>(withFormTest, withTimeLeft)(StartTestButton);
