import { createTheme } from '@mui/material';

const COLORS = {
  primaryColor: '#d83938',
  secondaryColor: '#ffffff',
  disabledTextColor: '#9b9b9b',
  primaryTextColor: '#000000DE',
  secondatyTextColor: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primaryColor,
    },
    secondary: {
      main: COLORS.secondaryColor,
    },
    text: {
      primary: COLORS.primaryTextColor,
      secondary: COLORS.secondatyTextColor,
      disabled: COLORS.disabledTextColor,
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

export default theme;
