import React from 'react';

import ProgressBar from 'components/ProgressBar';
import { SIZE } from 'constants/sizes';
import { VARIANTS } from 'constants/progressBar';
import { ITestProgress } from 'types/test';

import { ProgressBarBox } from './styled';

const ResultProgressBar: React.FC<ITestProgress> = ({ isFailed, percentageValue }) => (
  <ProgressBarBox>
    {isFailed ? (
      <ProgressBar
        size={SIZE.xlarge}
        value={percentageValue}
        text={`${percentageValue}%`}
        variant={VARIANTS.failed}
      />
    ) : (
      <ProgressBar
        size={SIZE.xlarge}
        value={percentageValue}
        text={`${percentageValue}%`}
        variant={VARIANTS.completed}
      />
    )}
  </ProgressBarBox>
);

export default ResultProgressBar;
