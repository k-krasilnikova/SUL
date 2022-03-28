import React, { useEffect, useState } from 'react';

import { useToggle } from 'hooks';
import { TIME_FORMAT } from 'constants/time';
import { makeLeftTime } from 'utils/helpers/convertTime';

type IncomingProps = {
  timeout: number;
  applyDate?: string;
  testDate?: string;
};

const withTimeLeft =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isTimeVisible, setTimeVisible] = useToggle(false);
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
      <div onMouseEnter={() => setTimeVisible(true)} onMouseLeave={() => setTimeVisible(false)}>
        <Component {...props}>{isTimeVisible && time}</Component>
      </div>
    );
  };

export default withTimeLeft;
