import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';

import SnackbarProvider from 'components/SnackbarProvider';

import 'index.css';
import App from 'App';
import theme from 'themeSettings';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
