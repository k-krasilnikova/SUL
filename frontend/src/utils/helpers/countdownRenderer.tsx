import React from 'react';
import { CountdownRenderProps } from 'react-countdown';

export const countdownRenderer = ({ hours, minutes }: CountdownRenderProps): JSX.Element => {
  return hours === 0 ? (
    <span>{`${minutes} min left`}</span>
  ) : (
    <span>{`${hours} h ${minutes} min left`}</span>
  );
};
