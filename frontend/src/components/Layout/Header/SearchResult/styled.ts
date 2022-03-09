import styled from 'styled-components';
import { ListItem } from '@mui/material';

import { imageDefault } from 'icons';
import theme from 'themeSettings';
import { HEADER_HEIGHT_IPAD } from 'components/Layout/Header/styled';

interface CourseAvatar {
  avatar?: string;
}

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
export const SearchResultItem = styled(ListItem)({
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
export const CourseTitle = styled('span')({
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '26px',
  letterSpacing: '-0.4px',
  marginLeft: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});
