import { createTheme } from '@mui/material';

export const COLORS = {
  primaryColor: '#d43e41',
  secondaryColor: '#FFF',
  darkColor: '#942b2d',
  disabledTextColor: '#9b9b9b',
  primaryTextColor: '#000',
  secondaryTextColor: '#FFF',
};

const themeOptions = {
  palette: {
    primary: {
      main: COLORS.primaryColor,
      dark: COLORS.darkColor,
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
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 770,
      xmd: 850,
      lg: 1025,
      xl: 1441,
    },
  },
};

const globalTheme = createTheme(themeOptions);

const theme = createTheme(
  {
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'medium' },
            style: {
              textTransform: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: globalTheme.typography.fontFamily,
              backgroundColor: globalTheme.palette.primary.main,
              color: globalTheme.palette.text.secondary,
              lineHeight: '22px',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
              '&:active': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
            },
          },
          {
            props: { variant: 'mediumOutlined' },
            style: {
              textTransform: 'none',
              border: '2.5px solid #d43e41',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: globalTheme.typography.fontFamily,
              backgroundColor: 'transparent',
              color: '#d43e41',
              lineHeight: '22px',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              boxShadow: 'none',
            },
          },
          {
            props: { variant: 'completed' },
            style: {
              textTransform: 'none',
              border: 'none',
              fontWeight: 500,
              fontFamily: globalTheme.typography.fontFamily,
              backgroundColor: 'transparent',
              color: '#727272',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              boxShadow: 'none',
            },
          },
          {
            props: { variant: 'mediumContained' },
            style: {
              textTransform: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: globalTheme.typography.fontFamily,
              backgroundColor: globalTheme.palette.primary.main,
              color: globalTheme.palette.text.secondary,
              lineHeight: '22px',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
              '&:active': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
              '&:disabled': {
                backgroundColor: '#e38181',
                color: '#8e5050',
              },
            },
          },
          {
            props: { variant: 'large', color: 'primary' },
            style: {
              textTransform: 'none',
              borderRadius: '4px',
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: globalTheme.typography.fontFamily,
              backgroundColor: globalTheme.palette.primary.main,
              color: globalTheme.palette.text.secondary,
              lineHeight: '22px',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
              '&:active': {
                backgroundColor: globalTheme.palette.primary.dark,
                color: globalTheme.palette.text.secondary,
              },
            },
          },
        ],
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: 'none',
            '&:before': {
              height: 0,
            },
            '&.Mui-expanded': {
              margin: 0,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            justifyContent: 'flex-start',
            minHeight: 'auto',
            padding: 0,
            '&.Mui-expanded': {
              minHeight: 'auto',
            },
            '&.Mui-disabled': {
              opacity: 1,
            },
          },
          content: {
            flexGrow: 0,
            minHeight: 'auto',
            margin: 0,
            '&.Mui-expanded': {
              margin: 0,
            },
          },
          expandIconWrapper: {
            alignSelf: 'flex-start',
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  },
  globalTheme,
);

export default theme;
