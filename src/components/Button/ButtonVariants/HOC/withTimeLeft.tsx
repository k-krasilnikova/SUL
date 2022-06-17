import React, { useEffect, useState } from 'react';

import { useToggle } from 'hooks';
import { TIME_FORMAT } from 'constants/time';
import { makeLeftTime } from 'utils/helpers/convertTime';

type TIncomingProps = {
  timeout: number;
  applyDate?: string;
  finishTestDate?: string;
};

const withTimeLeft =
  <T extends TIncomingProps>(Component: React.ComponentType<T>) =>
  (props: T): JSX.Element => {
    const [isTimeVisible, setTimeVisible] = useToggle();
    const [time, setTime] = useState<string | undefined>();
    const { applyDate, finishTestDate, timeout } = props;
    useEffect(() => {
      if (applyDate || finishTestDate) {
        setTime(
          makeLeftTime(
            applyDate || finishTestDate,
            `${TIME_FORMAT.days}:${TIME_FORMAT.hours}`,
            timeout,
          ),
        );
      }
    }, [applyDate, finishTestDate, timeout, isTimeVisible]);

    return (
      <div onMouseEnter={setTimeVisible} onMouseLeave={setTimeVisible}>
        <Component {...props}>{isTimeVisible && time}</Component>
      </div>
    );
  };

export default withTimeLeft;
