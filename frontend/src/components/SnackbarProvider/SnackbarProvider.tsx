import React, { createRef } from 'react';
import {
  SnackbarKey,
  SnackbarProvider as BaseSnackbarProvider,
  SnackbarProviderProps,
} from 'notistack';
import { IconButton } from '@mui/material';

import { CloseIcon } from './styled';

const Snackbar: React.FC<SnackbarProviderProps> = ({ children }) => {
  const notistackRef: React.Ref<BaseSnackbarProvider> = createRef();

  const handleSnackbarClose = (key: SnackbarKey) => () => {
    notistackRef?.current?.closeSnackbar(key);
  };

  return (
    <BaseSnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={handleSnackbarClose(key)} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    >
      {children}
    </BaseSnackbarProvider>
  );
};

export default Snackbar;
