import { CourseStatus } from 'enums/course';
import { useEffect, useState } from 'react';

type TIncomingProps = {
  status: CourseStatus;
};

const withDisable =
  <T extends TIncomingProps>(Component: React.ComponentType<T>) =>
  (props: T): JSX.Element => {
    const [isDisable, setDisable] = useState(false);
    const { status } = props;
    useEffect(() => {
      if (
        [
          CourseStatus.pending,
          CourseStatus.rejected,
          CourseStatus.completed,
          CourseStatus.assessment,
        ].includes(status)
      ) {
        setDisable(true);
      }
    }, [status]);

    const isCompleted = status === CourseStatus.completed;

    return <Component variant={isCompleted && 'completed'} isDisable={isDisable} {...props} />;
  };

export default withDisable;
