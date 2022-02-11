import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { ProgressBarBox } from './styled';
import { GradientSVG } from './GradientSVG';
import './styles.css';

interface ProgressProps {
  value?: number;
  textColor?: string;
  text?: string;
  size?: string;
  trailColor?: string;
  variant?: string;
}

const TEXT_COLOR = '#9C9C9C';

const VARIANTS = {
  completed: 'completed',
  failed: 'failed',
  skills: 'skills',
  default: 'default',
};

const ProgressBar: React.FC<ProgressProps> = ({
  value,
  textColor,
  text,
  size,
  trailColor,
  variant,
}) => {
  let gradientProps;
  if (variant === VARIANTS.completed) {
    gradientProps = {
      startColor: 'rgba(28, 192, 44, 1)',
      endColor: 'rgba(234, 234, 234, 1)',
      rotation: 135,
    };
  }
  if (variant === VARIANTS.failed) {
    gradientProps = {
      startColor: 'rgba(212, 62, 65, 1)',
      endColor: 'rgba(212, 62, 65, 0)',
      rotation: 100,
    };
  }
  if (variant === VARIANTS.skills) {
    gradientProps = {
      startColor: 'rgba(28, 192, 44, 1)',
      endColor: 'rgba(28, 192, 44, 0)',
      rotation: 90,
    };
  }

  return (
    <ProgressBarBox size={size}>
      <CircularProgressbar
        value={value || 0}
        text={text}
        strokeWidth={10}
        styles={buildStyles({
          textSize: '24px',
          textColor: textColor || TEXT_COLOR,
          trailColor: trailColor || '#d6d6d6',
          ...(variant === VARIANTS.completed && {
            textColor: '#000000',
            trailColor: '#eaeaea',
            textSize: '20px',
          }),
          ...(variant === VARIANTS.failed && {
            textColor: '#000000',
            trailColor: '#eaeaea',
            textSize: '20px',
          }),
          ...(variant === VARIANTS.skills && {
            textColor: '#000000',
            trailColor: '#c4c4c4',
            textSize: '20px',
          }),
          ...(variant === VARIANTS.default && {
            textColor: '#2c2525cc',
            trailColor: '#e4e4e4',
            textSize: '12px',
          }),
        })}
      />
      <GradientSVG {...gradientProps} idCSS="idCSS" />
    </ProgressBarBox>
  );
};

export default ProgressBar;
