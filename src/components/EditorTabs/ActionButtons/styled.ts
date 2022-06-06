import { Box, styled } from '@mui/material';

import { BackButton } from 'pages/CourseEditor/styled';

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '52px',
});

export const StyledButton = styled(BackButton)({
  fontSize: '18px',
  '&.Mui-disabled': {
    visibility: 'hidden',
  },
});
