import { styled } from '@mui/material';

import SearchInput from 'components/SearchInput';
import theme from 'themeSettings';

import { INPUT_HEIGHT_WITH_PADDING } from '../styled';

interface IProps {
  isOpen?: boolean;
}

export const Search = styled(SearchInput)<IProps>(({ isOpen }) => ({
  flexGrow: 0,
  flexShrink: '1',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3C3C43',
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
    left: 10,
    width: 'calc( 99% - 10px)',
    margin: '15px 0',
    zIndex: -1,
    transition: 'all 0.2s ease',
    borderRadius: '8px',
    ...(isOpen && {
      border: '1px solid #D43E41',
      backgroundColor: '#FFF',
      transform: `translateY(${INPUT_HEIGHT_WITH_PADDING})`,
      transition: 'all 0.2s ease',
    }),
  },
  [theme.breakpoints.down(770)]: {
    top: '-15px',
  },
}));

export const SearchButton = styled('div')({
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.8,
  },
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
    backgroundColor: '#7676801F',
  },
  [theme.breakpoints.down('md')]: {
    width: '35px',
    height: '35px',
  },
});

export const SearchIconStyled = styled('img')<IProps>(({ isOpen }) => ({
  height: '20px',
  color: '#6C6C6C',
  marginTop: '2px',
  ...(isOpen && {
    color: '#D43E41',
  }),
}));

export const RelativeWrapper = styled('div')({
  position: 'relative',
  [theme.breakpoints.down(950)]: {
    position: 'static',
  },
});
