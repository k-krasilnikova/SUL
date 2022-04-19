import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { PROGRESS_COLOR, TEXT_COLOR, TRAIL_COLOR, VARIANTS } from 'constants/progressBar';
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
        textSize: '14px',
        textColor: textColor || TEXT_COLOR,
        pathColor: color || PROGRESS_COLOR,
        trailColor: trailColor || TRAIL_COLOR,
        ...(variant === VARIANTS.completed && {
          textColor: '#000',
          pathColor: '#9be2a2',
          trailColor: '#eaeaea',
        }),
        ...(variant === VARIANTS.notStarted && {
          textColor: '#000',
          pathColor: '#eaeaea',
          trailColor: '#eaeaea',
        }),
        ...(variant === VARIANTS.employeeNotStarted && {
          textColor: '#000',
          pathColor: '#d6d6d6',
          trailColor: '#d6d6d6',
        }),
        ...(variant === VARIANTS.failed && {
          textColor: '#000',
          pathColor: '#ff9494',
          trailColor: '#ff9494',
        }),
        ...(variant === VARIANTS.employeeFailed && {
          textColor: '#000',
          pathColor: '#d43e41',
          trailColor: '#d43e41',
        }),
        ...(variant === VARIANTS.failedWithPercentage && {
          textColor: '#000',
          pathColor: '#d43e41',
          trailColor: '#eaeaea',
        }),
        ...(variant === VARIANTS.incompleteMobile && {
          textColor: ' #131313',
          pathColor: '#1cc02c',
          trailColor: '#eaeaea',
        }),
        ...(variant === VARIANTS.successfulMobile && {
          textColor: ' #131313',
          pathColor: '#1cc02c',
          trailColor: '#36c54480',
        }),
        ...(variant === VARIANTS.successful && {
          textColor: '#000',
          trailColor: '#36c54480',
          pathColor: '#36c54480',
        }),
        ...(variant === VARIANTS.successfulWithPercentage && {
          textColor: '#000',
          pathColor: '#1cc02c',
          trailColor: '#eaeaea',
        }),
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
