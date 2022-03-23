import { useEffect, useState } from 'react';

import { COURSE_STATUSES } from 'constants/statuses';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

import FormDialog from '../pages/LearningCourse/FormDialog/FormDialog';

type IncomingProps = {
  status?: string;
  progress?: ClientCourse['progress'];
  testDate?: string;
};

const withFormTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { progress, testDate, status } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [testEnabled, setTestEnabled] = useState(false);

    const checkTestDate = (date: string | undefined) => {
      if (!date) {
        return true;
      }
      return new Date(date).getTime() < Date.now();
    };

    useEffect(() => {
      if (
        status &&
        [COURSE_STATUSES.completed, COURSE_STATUSES.successful, COURSE_STATUSES.testing].includes(
          status,
        )
      ) {
        setTestEnabled(false);
        return;
      }
      if (!checkTestDate(testDate)) {
        setTestEnabled(false);
        return;
      }
      if (progress && isTestEnable(progress)) {
        setTestEnabled(true);
      }
    }, [progress, status, testDate]);

    const handleDialogOpen = () => {
      setDialogOpen(true);
    };

    const handleDialogClose = () => {
      setDialogOpen(false);
    };

    return (
      <>
        <Component handleDialogOpen={handleDialogOpen} isTestEnable={testEnabled} {...props} />
        <FormDialog dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      </>
    );
  };

export default withFormTest;
