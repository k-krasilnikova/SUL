import { styled, AccordionSummary, List } from '@mui/material';

import theme from 'themeSettings';

export const StyledAccordionSummary = styled(AccordionSummary)({
  display: 'flex',
  margin: '0 0 24px',
  pointerEvents: 'none',
  cursor: 'auto',
  '& .MuiAccordionSummary-expandIconWrapper': {
    visibility: 'hidden',
  },
  [theme.breakpoints.down('md')]: {
    margin: 0,
    pointerEvents: 'auto',
    cursor: 'pointer',
    '& 	.MuiAccordionSummary-expandIconWrapper': {
      visibility: 'visible',
    },
  },
});

export const UserInfoList = styled(List)({
  display: 'inline-block',
  padding: 0,
  fontWeight: 400,
  verticalAlign: 'top',
  color: '#2C2525',
});

export const UserName = styled('h4')({
  margin: 0,
  marginRight: '16px',
  fontSize: '24px',
  fontWeight: 400,
  textAlign: 'left',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
});
