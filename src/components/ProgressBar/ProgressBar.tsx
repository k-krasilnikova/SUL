import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { ProgressBarBox } from './styled';

const ProgressBar: React.FC = () => (
  <ProgressBarBox>
    <CircularProgressbar
      value={0}
      text="0%"
      strokeWidth={10}
      styles={buildStyles({ textSize: '18px', textColor: '#9C9C9C' })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
