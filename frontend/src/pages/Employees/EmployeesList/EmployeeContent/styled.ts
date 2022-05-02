import { styled, Box } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { IStyledExpandMoreIconProps } from 'pages/Employees/types';
import theme from 'themeSettings';

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)<IStyledExpandMoreIconProps>(
  ({ isVisible }) => ({
    ...(isVisible && {
      transform: 'rotate(180deg)',
    }),
    '&:hover': {
      cursor: 'pointer',
    },
    transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  }),
);

export const ContentWrapper = styled('p')({
  fontSize: '16px',
});

export const UserInfo = styled(Box)({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const ImageWrapper = styled('div')({
  height: '60px',
  width: '60px',
});

export const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
});

export const UserName = styled('p')({
  margin: 0,
  padding: 0,
  fontSize: '18px',
  lineHeight: 1.4,
  color: theme.palette.text.primary,
});

export const Position = styled('p')({
  margin: '8px 0 0 0',
  fontSize: '16px',
  lineHeight: 1.4,
  color: '#131313',
  [theme.breakpoints.down('xl')]: {
    marginTop: '10px',
  },
});

export const StackItem = styled('p')({
  margin: 0,
  marginBottom: '8px',
});
