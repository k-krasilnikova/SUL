import { styled, Typography } from '@mui/material';

import theme from 'themeSettings';
import { HEADER_HEIGHT_IPAD } from 'components/Layout/Header/styled';

export const SearchResultWrapper = styled('div')({
  position: 'absolute',
  zIndex: '15',
  background: '#FFFFFF',
  borderRadius: '6px',
  top: '60px',
  left: '40px',
  boxShadow: '0px 4px 4px 0px #00000040',
  minHeight: '39px',
  maxHeight: '232px',
  minWidth: '117px',
  maxWidth: '572px',
  padding: '8px',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    top: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.down(950)]: {
    top: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '270px',
    padding: '3px',
  },
});

export const NoSearchResults = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});
