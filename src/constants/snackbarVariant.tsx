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
  validationError: 'Validation error. Please check the fields before submitting form',
  fileSizeError: 'File size should be less then 10MB',
};

export const successSnackbarMessage = {
  courseStarted: 'Course was successfully started.',
  courseAdded: 'Course was successfully added.',
  courseDeleted: 'Course was successfully deleted.',
  applied: 'Course was successfully applied.',
  authorized: 'Authorization is successful.',
  finished: 'Test was successfully passed.',
  testStarted: 'Test was successfully started.',
  courseDataUpdated: 'Course was successfully updated.',
  courseDataCreated: 'Course was successfully created.',
};
