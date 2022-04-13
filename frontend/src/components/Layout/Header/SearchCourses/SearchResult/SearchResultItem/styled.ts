import styled from 'styled-components';
import { ListItem, Typography } from '@mui/material';

import { imageDefault } from 'icons';
import theme from 'themeSettings';

interface CourseAvatar {
  avatar?: string;
}

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

export const SearchResultCourse = styled(ListItem)({
  fontSize: '14px',
  color: '#131313',
  display: 'flex',
  paddingLeft: '3px !important',
  paddingRight: '3px !important',
});

export const RedirectButton = styled('div')({
  cursor: 'pointer',
});
