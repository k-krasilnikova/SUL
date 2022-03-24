import { useCallback, useEffect, useState } from 'react';

import { COURSE_STATUSES } from 'constants/statuses';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

import { useParams } from 'react-router';
import useGetTestTime from 'api/test/getTestTime';
import { useStartCourseTest } from 'api/test';

import checkTestDate from 'utils/helpers/checkTestDate';
import WarningStartTestDialog from './StartTestDialog';

type IncomingProps = {
  status?: string;
  progress?: ClientCourse['progress'];
  testDate?: string;
};

const withStartTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { courseId } = useParams();

    const { progress, testDate, status } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [testEnabled, setTestEnabled] = useState(false);

    const { mutate: startTestMutate } = useStartCourseTest(courseId);
    const { data: testTimeout } = useGetTestTime({ courseId, enabled: dialogOpen });

    const handleStartTest = () => {
      startTestMutate(courseId);
    };

    const handleDialogOpen = () => {
      setDialogOpen(true);
    };

    const handleDialogClose = () => {
      setDialogOpen(false);
    };

    const isTestDisabled = useCallback(
      () =>
        (status &&
          [COURSE_STATUSES.completed, COURSE_STATUSES.successful, COURSE_STATUSES.testing].includes(
            status,
          )) ||
        !checkTestDate(testDate) ||
        !isTestEnable(progress),
      [progress, status, testDate],
    );

    useEffect(() => {
      if (isTestDisabled()) {
        setTestEnabled(false);
        return;
      }
      setTestEnabled(true);
    }, [isTestDisabled, progress, status, testDate]);

    return (
      <>
        <Component handleDialogOpen={handleDialogOpen} isTestEnable={testEnabled} {...props} />
        <WarningStartTestDialog
          handleStartTest={handleStartTest}
          isOpened={dialogOpen}
          testTimeout={testTimeout}
          handleClose={handleDialogClose}
        />
      </>
    );
  };

export default withStartTest;
