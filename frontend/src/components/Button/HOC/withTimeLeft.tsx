import { TIME_FORMAT } from 'constants/time';
import { useToggle } from 'hooks';
import React, { useEffect, useState } from 'react';

import { makeLeftTime } from 'utils/helpers/convertTime';

type IncomingProps = {
  timeout: number;
  applyDate?: string;
  testDate?: string;
};

const withTimeLeft =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [state, toggle] = useToggle(false);
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
      <div onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)}>
        <Component {...props}>{state && time}</Component>
      </div>
    );
  };

export default withTimeLeft;
