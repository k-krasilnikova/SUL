import { styled, Checkbox, FormControlLabel } from '@mui/material';

import theme from 'themeSettings';

export const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0,
  '& .MuiTypography-root': {
    marginRight: '12px',
    fontSize: '16px',
    fontWeight: 500,
    color: '#131313',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
});

export const StyledCheckbox = styled(Checkbox)({
  width: '40px',
  height: '40px',
  padding: 0,
  backgroundColor: '#7676801F',
  borderRadius: '4px',
  border: '1px solid #CBBEBE',
  '&.Mui-checked': {
    borderColor: '#2C2525',
  },
  [theme.breakpoints.down('md')]: {
    width: '30px',
    height: '30px',
  },
});
