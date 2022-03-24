import styled from 'styled-components';

import { ExpandMore, ExpandLess } from '@mui/icons-material';

import theme from 'themeSettings';

export const CourseInfoToggleButton = styled('div')({
  display: 'inline-block',
  marginRight: 'calc(100% - 294px) !important',
  height: '40px',
  padding: '8px 0px 12px 0px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: '500',
  color: '#131313',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});

export const ExpandMoreIcon = styled(ExpandMore)({
  color: '#131313',
  verticalAlign: 'middle',
});

export const ExpandLessIcon = styled(ExpandLess)({
  color: '#131313',
  verticalAlign: 'middle',
});
