import React, { useEffect, useState } from 'react';

import { makeLeftTime } from 'utils/helpers/convertTime';

type IncommingProps = {
  applyDate?: string;
  testDate?: string;
  timeout: number;
};

const withTimeLeft =
  <T extends IncommingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isShowTime, setShowTime] = useState(false);
    const [time, setTime] = useState<string | undefined>();
    const { applyDate, testDate, timeout } = props;
    useEffect(() => {
      if (applyDate || testDate) {
        setTime(makeLeftTime(applyDate || testDate, 'dd:hh', timeout));
      }
    }, [applyDate, isShowTime, testDate, timeout]);

    return (
      <div onMouseEnter={() => setShowTime(true)} onMouseLeave={() => setShowTime(false)}>
        <Component {...props}>{isShowTime && time}</Component>
      </div>
    );
  };

export default withTimeLeft;
