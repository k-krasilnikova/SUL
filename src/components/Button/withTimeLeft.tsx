import React, { useEffect, useState } from 'react';
import { makeLeftTime } from 'utils/helpers/convertTime';

type IncommingProps = {
  applyDate?: string;
};

const withTimeLeft = (Component: React.ComponentType) => (incommingProps: IncommingProps) => {
  const [isShowTime, setShowTime] = useState(false);
  const [time, setTime] = useState<string | undefined>();
  const { applyDate, ...props } = incommingProps;

  useEffect(() => {
    if (applyDate) {
      setTime(makeLeftTime(applyDate, 'dd:hh'));
    }
  }, [applyDate, isShowTime]);

  return (
    <div onMouseEnter={() => setShowTime(true)} onMouseLeave={() => setShowTime(false)}>
      <Component {...props}>{isShowTime && time}</Component>;
    </div>
  );
};

export default withTimeLeft;
