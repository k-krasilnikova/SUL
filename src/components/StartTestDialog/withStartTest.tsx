import { useCallback } from 'react';
import { useParams } from 'react-router';

import { COURSE_STATUSES } from 'constants/statuses';
import { ClientCourse } from 'types/clientCourse';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import useGetTestTime from 'api/test/getTestTime';
import { useStartCourseTest } from 'api/test';
import checkTestDate from 'utils/helpers/checkTestDate';
import { useToggle } from 'hooks';

import WarningStartTestDialog from './StartTestDialog';

type IncomingProps = {
  timeout?: number;
  status?: string;
  progress?: ClientCourse['progress'];
  testDate?: string;
};

const withStartTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { courseId } = useParams();

    const { progress, testDate, status, timeout } = props;
    const [state, toggle] = useToggle();

    const { mutate: startTestMutate } = useStartCourseTest(courseId);
    const { data: testTimeout } = useGetTestTime({ courseId, enabled: state });

    const handleStartTest = () => {
      startTestMutate(courseId);
    };

    const isTestDisabled = useCallback(
      () =>
        (status &&
          [COURSE_STATUSES.completed, COURSE_STATUSES.successful, COURSE_STATUSES.testing].includes(
            status,
          )) ||
        !checkTestDate(testDate, timeout) ||
        !isProgressCompleted(progress),
      [progress, status, testDate, timeout],
    );

    return (
      <>
        <Component
          handleDialogOpen={() => toggle(true)}
          isTestEnable={!isTestDisabled()}
          {...props}
        />
        <WarningStartTestDialog
          handleStartTest={handleStartTest}
          isOpened={state}
          testTimeout={testTimeout}
          handleClose={() => toggle(false)}
        />
      </>
    );
  };

export default withStartTest;
