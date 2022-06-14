import { styled } from '@mui/material';

import SearchInput from 'components/SearchInput';
import theme from 'themeSettings';
import {
  // HEADER_HEIGHT,
  // HEADER_HEIGHT_IPAD,
  // HEADER_HEIGHT_MOBILE,
  INPUT_HEIGHT_WITH_PADDING,
} from '../styled';

interface IProps {
  isOpen?: boolean;
}

export const Search = styled(SearchInput)<IProps>(({ isOpen }) => ({
  flexGrow: 0,
  flexShrink: '1',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  height: '40px',
  width: '460px',
  padding: '10px',
  margin: '15px 20px 15px 0',
  fontSize: '18px',
  [theme.breakpoints.up(1920)]: {
    width: '600px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
  [theme.breakpoints.down(950)]: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
    zIndex: -1,
    transition: 'all 0.2s ease',
    borderRadius: '8px',
    border: '2px solid #D43E41',
    ...(isOpen && {
      backgroundColor: '#fff',
      transform: `translateY(${INPUT_HEIGHT_WITH_PADDING})`,
      transition: 'all 0.2s ease',
    }),
  },
  [theme.breakpoints.down(770)]: {
    top: '-15px',
  },
}));
export const SearchButton = styled('div')({
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
  [theme.breakpoints.down(950)]: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    padding: '5px',
    marginRight: '5px',
    borderRadius: '3px',
    backgroundColor: '#7676801f',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const RelativeWrapper = styled('div')({
  position: 'relative',
  [theme.breakpoints.down(950)]: {
    position: 'static',
  },
});
