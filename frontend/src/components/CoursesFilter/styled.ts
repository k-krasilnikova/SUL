import { styled, FormControlLabel } from '@mui/material';

import theme from 'themeSettings';

export const FormWrapper = styled('div')({
  '& > form': {
    padding: '0 26px',
    marginTop: '40px',
  },
});

export const FieldsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px',
});

export const StyledFormControlLabel = styled(FormControlLabel)({
  '& .MuiTypography-root': {
    fontSize: '16px',
    fontWeight: '500',
    color: '#131313',
  },
});

// [theme.breakpoints.down('md')]: {
//  height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
//  width: '100%',
// },
