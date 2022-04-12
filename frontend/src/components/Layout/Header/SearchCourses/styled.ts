import styled from 'styled-components';

import theme from 'themeSettings';
import SearchInput from 'components/SearchInput';

export const Search = styled(SearchInput)({
  flexGrow: '0',
  flexShrink: '1',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  height: '40px',
  width: '460px',
  padding: '10px',
  margin: '15px 20px 15px 0px',
  fontSize: '18px',
  [theme.breakpoints.up(1920)]: {
    width: '600px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
  [theme.breakpoints.down(950)]: {
    display: 'none!important',
  },
});

export const RelativeWrapper = styled('div')({
  position: 'relative',
});

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

export const SearchResultCourse = styled(ListItem)({
  fontSize: '14px',
  color: '#131313',
  display: 'flex',
  paddingLeft: '3px !important',
  paddingRight: '3px !important',
});

export const Image = styled('div')<CourseAvatar>(({ avatar }) => ({
  width: '82px',
  height: '51px',
  border: '1px solid #7676801F',
  borderRadius: '4px',
  float: 'left',
  margin: '0px 8px 0px 0px',
  overflow: 'hidden',
  flexShrink: '0',
  alignItems: 'center',
  background: `no-repeat center url(${avatar || imageDefault})`,
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '40px',
  },
}));

export const CourseTitle = styled(Typography)({
  fontSize: '20px !important',
  fontWeight: '700 !important',
  lineHeight: '26px',
  letterSpacing: '-0.4px',
  marginLeft: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
  },
});

export const NoSearchResults = styled(Typography)({
  fontSize: '20px !important',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
  },
});

export const RedirectButton = styled('div')({
  cursor: 'pointer',
});
