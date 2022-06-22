import { useCallback } from 'react';
import { useParams } from 'react-router';

import { useToggle } from 'hooks';
import { useGetTestTime, useStartCourseTest } from 'api/test';
import checkTestDate from 'utils/helpers/checkTestDate';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import { IClientCourse } from 'types/clientCourse';
import { CourseStatus } from 'enums/course';

import StartTestDialog from './StartTestDialog';

type TIncomingProps = {
  timeout?: number;
  status?: CourseStatus;
  progress?: IClientCourse['progress'];
  finishTestDate?: string;
};

const withStartTest =
  <T extends TIncomingProps>(Component: React.ComponentType<T>) =>
  (props: T): JSX.Element => {
    const { courseId } = useParams();

    const { progress, finishTestDate, status, timeout } = props;
    const [isOpen, setOpen] = useToggle();

    const { mutate: startTestMutate } = useStartCourseTest(courseId);
    const { data: testTimeoutData } = useGetTestTime({ courseId, enabled: isOpen });

    const handleStartTest = () => {
      startTestMutate(courseId);
    };

    const isTestDisabled = useCallback(
      () =>
        (status &&
          [
            CourseStatus.completed,
            CourseStatus.testing,
            CourseStatus.assessment,
            CourseStatus.failed,
          ].includes(status)) ||
        !checkTestDate(finishTestDate, timeout) ||
        !isProgressCompleted(progress),
      [progress, status, finishTestDate, timeout],
    );

    return (
      <>
        <Component handleDialogOpen={setOpen} isTestEnable={!isTestDisabled()} {...props} />
        <StartTestDialog
          handleStartTest={handleStartTest}
          isOpened={isOpen}
          testTimeout={testTimeoutData}
          handleClose={setOpen}
        />
      </>
    );
  };

export default withStartTest;
