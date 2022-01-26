import { createTheme } from '@mui/material';

const COLORS = {
  primaryColor: '#d83938',
  secondaryColor: '#ffffff',
  disabledTextColor: '#9b9b9b',
  primaryTextColor: '#000000DE',
  secondaryTextColor: '#ffffff',
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
      secondary: COLORS.secondaryTextColor,
      disabled: COLORS.disabledTextColor,
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    allVariants: {
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;
