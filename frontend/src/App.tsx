import React from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from 'api/base';

import theme from './themeSettings';

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <div>Some components</div>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
