import React from 'react';
import { compose } from 'recompose';

import withFormTest from 'HOC/withFormDialog';
import { ClientCourse } from 'types/clientCourse';
import withTimeLeft from 'HOC/withTimeLeft';

import { CustomButton } from './styled';

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

const StartTestButton: React.FC<IProps> = ({ children, handleDialogOpen, isTestEnable }) => {
  return (
    <CustomButton variant="mediumContained" disabled={!isTestEnable} onClick={handleDialogOpen}>
      {children || 'Start Test'}
    </CustomButton>
  );
};

export default compose<IProps, TOutterProps>(withFormTest, withTimeLeft)(StartTestButton);
