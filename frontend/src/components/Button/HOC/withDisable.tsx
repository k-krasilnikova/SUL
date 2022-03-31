import { useEffect, useState } from 'react';

import { COURSE_STATUSES } from 'constants/statuses';

type IncomingProps = {
  status: string;
};

const withDisable =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T): JSX.Element => {
    const [isDisable, setDisable] = useState(false);
    const { status } = props;
    useEffect(() => {
      if (
        [
          COURSE_STATUSES.pending,
          COURSE_STATUSES.rejected,
          COURSE_STATUSES.completed,
          COURSE_STATUSES.successful,
          COURSE_STATUSES.assessment,
          COURSE_STATUSES.failed,
        ].includes(status)
      ) {
        setDisable(true);
      }
    }, [status]);

    const isCompleted =
      status === COURSE_STATUSES.completed || status === COURSE_STATUSES.successful;

    return <Component variant={isCompleted && 'completed'} isDisable={isDisable} {...props} />;
  };

export default withDisable;
