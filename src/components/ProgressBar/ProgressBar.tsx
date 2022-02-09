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
  variant?: string;
}

const PROGRESS_COLOR = '#1BC02C';
const TEXT_COLOR = '#9C9C9C';

const VARIANTS = {
  completed: 'completed',
  failed: 'failed',
};

const ProgressBar: React.FC<ProgressProps> = ({
  value,
  color,
  textColor,
  text,
  size,
  trailColor,
  variant,
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
        ...(variant === VARIANTS.completed && {
          textColor: '#000000',
          pathColor: '#1cc02c',
          trailColor: '#eaeaea',
          textSize: '20px',
        }),
        ...(variant === VARIANTS.failed && {
          textColor: '#000000',
          pathColor: '#d43e41',
          trailColor: '#eaeaea',
          textSize: '20px',
        }),
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
