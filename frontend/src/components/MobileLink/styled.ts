import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

import theme from 'themeSettings';

export const StyledLink = styled(Link)({
  height: '100%',
  '&:hover': {
    cursor: 'default',
  },
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
