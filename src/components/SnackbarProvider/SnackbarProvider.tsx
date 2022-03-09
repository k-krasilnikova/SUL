import React, { createRef } from 'react';
import {
  SnackbarKey,
  SnackbarProvider as BaseSnackbarProvider,
  SnackbarProviderProps,
} from 'notistack';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

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
          <Close fontSize="small" sx={{ color: '#ffffff' }} />
        </IconButton>
      )}
    >
      {children}
    </BaseSnackbarProvider>
  );
};

export default Snackbar;
