import React, { useEffect, useState } from 'react';

import { useToggle } from 'hooks';
import { TIME_FORMAT } from 'constants/time';
import { makeLeftTime } from 'utils/helpers/convertTime';

type TIncomingProps = {
  timeout: number;
  applyDate?: string;
  testDate?: string;
};

const withTimeLeft =
  <T extends TIncomingProps>(Component: React.ComponentType<T>) =>
  (props: T): JSX.Element => {
    const [isTimeVisible, setTimeVisible] = useToggle();
    const [time, setTime] = useState<string | undefined>();
    const { applyDate, testDate, timeout } = props;
    useEffect(() => {
      if (applyDate || testDate) {
        setTime(
          makeLeftTime(applyDate || testDate, `${TIME_FORMAT.days}:${TIME_FORMAT.hours}`, timeout),
        );
      }
    }, [applyDate, testDate, timeout]);

    return (
      <div onMouseEnter={setTimeVisible} onMouseLeave={setTimeVisible}>
        <Component {...props}>{isTimeVisible && time}</Component>
      </div>
    );
  };

export default withTimeLeft;
