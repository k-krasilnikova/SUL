import React from 'react';
import { compose } from 'recompose';

import withStartTest from 'components/Dialogs/StartTestDialog/withStartTest';
import { ButtonLabels } from 'constants/ButtonLabels';
import { IClientCourse } from 'types/clientCourse';

import { withTimeLeft } from './HOC';
import { CustomButton } from './styled';

interface IProps {
  isTestEnable: boolean;
  handleDialogOpen?: () => void;
}

type TOutterProps = {
  status?: string;
  timeout?: number;
  progress?: IClientCourse['progress'];
};

const StartTestButton: React.FC<IProps> = ({ children, handleDialogOpen, isTestEnable }) => (
  <CustomButton variant="mediumContained" disabled={!isTestEnable} onClick={handleDialogOpen}>
    {children || ButtonLabels.startTest}
  </CustomButton>
);

export default compose<IProps, TOutterProps>(withStartTest, withTimeLeft)(StartTestButton);
