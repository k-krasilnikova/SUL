import React from 'react';
import { CountdownRenderProps } from 'react-countdown';

export const countdownRenderer = ({
  hours,
  minutes,
  completed,
}: CountdownRenderProps): JSX.Element => {
  return completed ? <span>Time is over</span> : <span>{`${hours} h ${minutes} min left`}</span>;
};
