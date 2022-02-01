import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { ProgressBarBox } from './styled';

interface ProgressProps {
  value?: number;
  color?: string;
  text?: string;
  size?: string;
}

const PROGRESS_COLOR = '#1BC02C';

const ProgressBar: React.FC<ProgressProps> = ({ value, color, text, size }) => (
  <ProgressBarBox size={size}>
    <CircularProgressbar
      value={value || 0}
      text={text}
      strokeWidth={10}
      styles={buildStyles({
        textSize: '24px',
        textColor: '#9C9C9C',
        pathColor: color || PROGRESS_COLOR,
        trailColor: '#d6d6d6',
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
