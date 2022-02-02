import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { ProgressBarBox } from './styled';

interface ProgressProps {
  value?: number;
  color?: string;
  textColor?: string;
  text?: string;
  size?: string;
  trailColor?: string;
}

const PROGRESS_COLOR = '#1BC02C';
const TEXT_COLOR = '#9C9C9C';

const ProgressBar: React.FC<ProgressProps> = ({
  value,
  color,
  textColor,
  text,
  size,
  trailColor,
}) => (
  <ProgressBarBox size={size}>
    <CircularProgressbar
      value={value || 0}
      text={text}
      strokeWidth={10}
      styles={buildStyles({
        textSize: '24px',
        textColor: textColor || TEXT_COLOR,
        pathColor: color || PROGRESS_COLOR,
        trailColor: trailColor || '#d6d6d6',
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
