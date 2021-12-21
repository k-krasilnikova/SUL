import { createTheme } from '@mui/material';

const colors = {
  primaryColor: '#d83938',
  secondaryColor: '#ffffff',
  disabledTextColor: '#9b9b9b',
  primaryTextColor: '#000000DE',
  secondatyTextColor: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
    },
    text: {
      primary: colors.primaryTextColor,
      secondary: colors.secondatyTextColor,
      disabled: colors.disabledTextColor,
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

export default theme;
