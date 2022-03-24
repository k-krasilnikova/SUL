import React from 'react';
import { compose } from 'recompose';

import withStartTest from 'components/StartTestDialog/withStartTest';
import { ClientCourse } from 'types/clientCourse';
import { TEST_LABEL } from 'constants/test';

import withTimeLeft from './HOC/withTimeLeft';
import { CustomButton } from './styled';

interface IProps {
  isTestEnable: boolean;
  handleDialogOpen?: () => void;
}

type TOutterProps = {
  status: string;
  timeout: number;
  testDate?: string;
  applyDate?: string;
  progress?: ClientCourse['progress'];
};

const StartTestButton: React.FC<IProps> = ({ children, handleDialogOpen, isTestEnable }) => {
  return (
    <CustomButton variant="mediumContained" disabled={!isTestEnable} onClick={handleDialogOpen}>
      {children || TEST_LABEL}
    </CustomButton>
  );
};

export default compose<IProps, TOutterProps>(withStartTest, withTimeLeft)(StartTestButton);
