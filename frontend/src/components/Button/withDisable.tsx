import { COURSE_STATUSES } from 'constants/statuses';
import { useEffect, useState } from 'react';

type InjectedProps = {
  isDisable: boolean;
};

type IncommingProps = {
  status: string;
};

const withDisable =
  <T extends InjectedProps>(Component: any) =>
  (incommingProps: IncommingProps & Omit<T, 'progress'> & Omit<T, 'isDisable'>) => {
    const [isDisable, setDisable] = useState(false);
    const { status, ...props } = incommingProps;
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

    return <Component isDisable={isDisable} {...(props as unknown as Omit<T, 'isDisable'>)} />;
  };

export default withDisable;
