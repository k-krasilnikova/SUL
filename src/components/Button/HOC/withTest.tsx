import { useEffect, useState } from 'react';

import { COURSE_STATUSES } from 'constants/statuses';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

type IncomingProps = {
  status: string;
  progress?: ClientCourse['progress'];
};

const withTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isEnable, setAble] = useState<boolean>(false);
    const { progress, status } = props;
    useEffect(() => {
      if (progress && status === COURSE_STATUSES.testing) {
        setAble(isTestEnable(progress));
      }
    }, [progress, status]);

    return <Component isTest={isEnable} {...props} />;
  };

export default withTest;
