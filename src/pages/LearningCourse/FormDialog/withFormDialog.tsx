import { useEffect, useState } from 'react';

import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';

import FormDialog from './FormDialog';

type IncomingProps = {
  progress?: ClientCourse['progress'];
  testDate?: string;
};

const withFormTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { progress, testDate } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [testEnabled, setTestEnabled] = useState(false);

    const checkTestDate = (date: string | undefined) => {
      if (!date) {
        return true;
      }
      return new Date(date).getTime() < Date.now();
    };

    useEffect(() => {
      if (progress && isTestEnable(progress) && checkTestDate(testDate)) {
        setTestEnabled(true);
      }
      if (!checkTestDate(testDate)) {
        setTestEnabled(false);
      }
    }, [progress, testDate]);

    const handleClickDialogOpen = () => {
      setDialogOpen(true);
    };

    const handleDialogClose = () => {
      setDialogOpen(false);
    };
    return (
      <>
        <Component
          handleClickDialogOpen={handleClickDialogOpen}
          isTestEnable={testEnabled}
          {...props}
        />
        <FormDialog dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      </>
    );
  };

export default withFormTest;
