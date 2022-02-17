import React from 'react';
import { CountdownRenderProps } from 'react-countdown';

export const countdownRenderer = ({
  hours,
  minutes,
  seconds,
}: CountdownRenderProps): JSX.Element => {
  return hours === 0 ? (
    <span>{`${minutes} min ${seconds} sec left`}</span>
  ) : (
    <span>{`${hours} h ${minutes} min ${seconds} sec left`}</span>
  );
};
