import React from 'react';

import ProgressBar from 'components/ProgressBar';
import { SIZE } from 'constants/sizes';
import { ITestProgress } from 'types/test';

import { ProgressBarBox } from './styled';

const ResultProgressBar: React.FC<ITestProgress> = ({
  progressValue,
  progressText,
  progressVariant,
}) => (
  <ProgressBarBox>
    <ProgressBar
      size={SIZE.xlarge}
      value={progressValue}
      text={progressText}
      variant={progressVariant}
    />
  </ProgressBarBox>
);

export default ResultProgressBar;
