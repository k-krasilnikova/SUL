import { styled } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import theme from 'themeSettings';

export const CourseInfoToggleButton = styled('div')({
  display: 'inline-block',
  marginRight: 'calc(100% - 294px)',
  height: '40px',
  padding: '8px 0 12px 0',
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: 500,
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
