import { useEffect, useState } from 'react';

import { COURSE_STATUSES } from 'constants/statuses';

type IncomingProps = {
  status: string;
};

const withDisable =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const [isDisable, setDisable] = useState(false);
    const { status } = props;
    useEffect(() => {
      if (
        [
          COURSE_STATUSES.pending,
          COURSE_STATUSES.rejected,
          COURSE_STATUSES.completed,
          COURSE_STATUSES.successful,
        ].includes(status)
      ) {
        setDisable(true);
      }
    }, [status]);

    return <Component isDisable={isDisable} {...props} />;
  };

export default withDisable;
