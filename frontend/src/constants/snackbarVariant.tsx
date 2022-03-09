import { OptionsObject } from 'notistack';

export const errorSnackbar: OptionsObject = {
  variant: 'error',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export const successSnackbar: OptionsObject = {
  variant: 'success',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export const successSnackbarMessage = {
  courseStarted: 'Course was successfully started.',
  applied: 'Course was successfully applied.',
  authorized: 'Authorization is successful.',
  finished: 'Successful completion of the course.',
  testStarted: 'Test was successfully started.',
};
