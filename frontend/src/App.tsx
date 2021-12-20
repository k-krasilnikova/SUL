import React from 'react';
import {ThemeProvider} from "@mui/material";
import theme from "./themeSettings";
import Layout from "./pages/Layout"

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Layout/>
  </ThemeProvider> 
);

export default App;
