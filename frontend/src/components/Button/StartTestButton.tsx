import React from 'react';
import { compose } from 'recompose';

import withStartTest from 'components/StartTestDialog/withStartTest';
import { ClientCourse } from 'types/clientCourse';

import withTimeLeft from './HOC/withTimeLeft';
import { CustomButton } from './styled';
import { ButtonLabels } from './ButtonsEnums';

interface IProps {
  isTestEnable: boolean;
  handleDialogOpen?: () => void;
}

type TOutterProps = {
  status?: string;
  timeout?: number;
  testDate?: string;
  progress?: ClientCourse['progress'];
};

const StartTestButton: React.FC<IProps> = ({ children, handleDialogOpen, isTestEnable }) => (
  <CustomButton variant="mediumContained" disabled={!isTestEnable} onClick={handleDialogOpen}>
    {children || ButtonLabels.startTest}
  </CustomButton>
);

export default compose<IProps, TOutterProps>(withStartTest, withTimeLeft)(StartTestButton);
