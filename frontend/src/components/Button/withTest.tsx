import { COURSE_STATUSES } from 'constants/statuses';
import { useEffect, useState } from 'react';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

type IncommingProps = {
  progress?: ClientCourse['progress'];
  status: string;
};

const withTest =
  <T extends IncommingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isEnable, setAble] = useState(false);
    const { progress, status } = props;
    useEffect(() => {
      if (progress && status === COURSE_STATUSES.testing) {
        setAble(isTestEnable(progress));
      }
    }, [progress, status]);

    return <Component isTest={isEnable} {...props} />;
  };

export default withTest;
