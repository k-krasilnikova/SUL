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

export const errorSnackbarMessage = {
  requestFailed: 'Something went wrong',
};

export const successSnackbarMessage = {
  courseStarted: 'Course was successfully started.',
  courseAdded: 'Course was successfully added.',
  applied: 'Course was successfully applied.',
  authorized: 'Authorization is successful.',
  finished: 'Test was successfully passed.',
  testStarted: 'Test was successfully started.',
};