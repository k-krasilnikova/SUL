import React from 'react';

import ProgressBar from 'components/ProgressBar';
import { ITestProgress } from 'types/test';
import { Size } from 'enums/sizes';

import { ProgressBarBox } from './styled';

const ResultProgressBar: React.FC<ITestProgress> = ({
  progressValue,
  progressText,
  progressVariant,
}) => (
  <ProgressBarBox>
    <ProgressBar
      size={Size.xlarge}
      value={progressValue}
      text={progressText}
      variant={progressVariant}
    />
  </ProgressBarBox>
);

export default ResultProgressBar;
