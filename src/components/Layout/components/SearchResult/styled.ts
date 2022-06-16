import { styled, Typography } from '@mui/material';

import {
  HEADER_HEIGHT_IPAD,
  HEADER_HEIGHT_MOBILE,
  INPUT_HEIGHT_WITH_PADDING,
} from 'components/Layout/AuthorizedLayout/Header/styled';
import theme from 'themeSettings';

export const SearchResultWrapper = styled('div')({
  position: 'absolute',
  zIndex: '15',
  background: '#FFF',
  borderRadius: '6px',
  top: '60px',
  left: '40px',
  boxShadow: '0 4px 4px 0 #00000040',
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
    top: `calc(${HEADER_HEIGHT_IPAD} + ${INPUT_HEIGHT_WITH_PADDING})`,
    padding: '5px',
  },
  [theme.breakpoints.down(770)]: {
    top: `calc(${HEADER_HEIGHT_MOBILE} + ${INPUT_HEIGHT_WITH_PADDING})`,
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
