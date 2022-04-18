import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const BackArrow = styled('img')({
  [theme.breakpoints.up('xs')]: {
    display: 'inline-block',
    margin: '0 23px -3px 16px',
  },
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});

export const BackLink = styled(Link)({
  [theme.breakpoints.up('xs')]: {
    height: 'fit-content',
    width: 'fit-content',
  },
});

export const StyledButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px',
  [theme.breakpoints.down('lg')]: {
    display: 'inline-flex',
    height: '32px',
    width: '64px',
    fontSize: '12px',
    marginBottom: '15px',
  },
  [theme.breakpoints.down(950)]: {
    display: 'none',
  },
});
