import { useEffect, useState } from 'react';
import { ClientCourse } from 'types/clientCourse';
import { isTestEnable } from 'utils/helpers/isTestEnable';
import FormDialog from './FormDialog';

type IncomingProps = {
  status: string;
  progress?: ClientCourse['progress'];
};

const withFormTest =
  <T extends IncomingProps>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { status, progress } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [testEnabled, setTestEnabled] = useState(false);

    useEffect(() => {
      if (progress && isTestEnable(progress)) {
        setTestEnabled(true);
      }
    }, [progress]);

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
        <FormDialog
          dialogOpen={dialogOpen}
          handleDialogClose={handleDialogClose}
          courseStatus={status}
        />
      </>
    );
  };

export default withFormTest;
