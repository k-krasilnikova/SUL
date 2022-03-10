import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { PROGRESS_COLOR, TEXT_COLOR, VARIANTS } from 'constants/progressBar';
import { ProgressProps } from 'types/progressBar';

import { ProgressBarBox } from './styled';

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
        ...(variant === VARIANTS.mobileCourse && {
          textColor: ' #131313',
          pathColor: '#1cc02c',
          trailColor: '#eaeaea',
          textSize: '24px',
        }),
        ...(variant === VARIANTS.successful && {
          textColor: '#000000',
          textSize: '12px',
          trailColor: '#36c54480',
        }),
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
