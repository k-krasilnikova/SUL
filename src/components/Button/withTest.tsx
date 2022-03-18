import React, { useEffect, useState } from 'react';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

type InjectedProps = {
  isTest: boolean;
};

type IncommingProps = {
  progress: ClientCourse['progress'];
};

const withTest =
  <T extends InjectedProps>(Component: any) =>
  (incommingProps: IncommingProps & Omit<T, 'progress'> & Omit<T, 'isTest'>) => {
    const [isEnable, setAble] = useState(false);
    const { progress, ...props } = incommingProps;
    useEffect(() => {
      setAble(isTestEnable(progress));
    }, [progress]);

    return <Component isTest={isEnable} {...(props as unknown as Omit<T, 'isTest'>)} />;
  };

export default withTest;
