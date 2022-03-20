import { useEffect, useState } from 'react';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

type IncommingProps = {
  progress: ClientCourse['progress'];
};

const withTest =
  <T extends IncommingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isEnable, setAble] = useState(false);
    const { progress } = props;
    useEffect(() => {
      setAble(isTestEnable(progress));
    }, [progress]);

    return <Component isTest={isEnable} {...props} />;
  };

export default withTest;
