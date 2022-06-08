import { styled } from '@mui/material';

import theme from 'themeSettings';

export const FormWrapper = styled('div')<{ withStatusSelect?: boolean }>(
  ({ withStatusSelect }) => ({
    maxWidth: `${withStatusSelect ? '1174px' : '814px'}`,
    '& > form': {
      padding: '0 26px',
      marginTop: '40px',
    },
  }),
);

export const FieldsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px',
});

// [theme.breakpoints.down('md')]: {
//  height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
//  width: '100%',
// },
