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
        textSize: '14px',
        textColor: textColor || TEXT_COLOR,
        pathColor: color || PROGRESS_COLOR,
        trailColor: trailColor || '#d6d6d6',
        ...(variant === VARIANTS.completed && {
          textColor: '#000000',
          pathColor: '#9be2a2',
          trailColor: '#eaeaea',
        }),
        ...(variant === VARIANTS.failed && {
          textColor: '#000000',
          pathColor: '#ff9494',
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
          textColor: '#000000',
          trailColor: '#36c54480',
        }),
      })}
    />
  </ProgressBarBox>
);

export default ProgressBar;
