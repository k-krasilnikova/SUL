import { styled, ListItem, Typography } from '@mui/material';

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
  margin: '0 8px 0 0',
  overflow: 'hidden',
  flexShrink: 0,
  alignItems: 'center',
  background: `no-repeat center url(${avatar || imageDefault})`,
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '40px',
  },
}));

export const CourseTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '26px',
  wordBreak: 'break-all',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});

export const SearchResultCourse = styled(ListItem)({
  fontSize: '14px',
  color: '#131313',
  display: 'flex',
  paddingLeft: '3px',
  paddingRight: '3px',
});

export const RedirectButton = styled('div')({
  cursor: 'pointer',
});
