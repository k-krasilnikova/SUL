import { styled } from '@mui/material';

import theme from 'themeSettings';

export const FormWrapper = styled('div')<{ withStatusSelect?: boolean }>(
  ({ withStatusSelect }) => ({
    maxWidth: `${withStatusSelect ? '1288px' : '928px'}`,
    '& > form': {
      padding: '0 26px',
      marginTop: '40px',
      [theme.breakpoints.down('md')]: {
        padding: '0 12px',
        marginTop: '20px',
      },
    },
  }),
);

export const FieldsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
});
