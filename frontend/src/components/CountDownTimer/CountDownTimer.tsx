import React, { useRef } from 'react';
import Countdown from 'react-countdown';

import { countdownRenderer } from 'utils/helpers/countdownRenderer';
import { TO_MILLISECONDS_RATIO } from '../../constants/time';

interface ITimer {
  duration: number;
  children?: React.ReactChild;
  restartKey?: number;
}

const CountDownTimer: React.FC<ITimer> = ({ duration, children, restartKey, ...props }) => {
  const startDate = useRef(Date.now());

  return (
    <Countdown
      renderer={countdownRenderer}
      date={startDate.current + duration * TO_MILLISECONDS_RATIO}
      key={restartKey}
      {...props}
    />
  );
};

export default CountDownTimer;
