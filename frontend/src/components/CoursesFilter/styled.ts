import { styled } from '@mui/material';

export const FormWrapper = styled('div')<{ withStatusSelect?: boolean }>(
  ({ withStatusSelect }) => ({
    maxWidth: `${withStatusSelect ? '1288px' : '928px'}`,
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
