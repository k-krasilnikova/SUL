import { styled, Checkbox } from '@mui/material';

import theme from 'themeSettings';

export const StyledCheckbox = styled(Checkbox)({
  width: '40px',
  height: '40px',
  padding: 0,
  backgroundColor: '#7676801f',
  borderRadius: '4px',
  border: '2px solid #CBBEBE',
  '&:hover': {
    borderColor: '#131313',
  },
  '&.Mui-checked': {
    borderColor: '#D43E41',
  },
});

// [theme.breakpoints.down('md')]: {
//  height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
//  width: '100%',
// },
