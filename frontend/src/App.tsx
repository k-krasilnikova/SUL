import React from 'react';
import {ThemeProvider} from "@mui/material";

import theme from "./themeSettings";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                Some components
            </div>
        </ThemeProvider>
    );
}

export default App;
