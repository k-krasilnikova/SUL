import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const RequestsWrapper = styled('div')({
  padding: '40px 30px',
  fontFamily: 'Ubuntu',
  height: 'calc(100% - 100px)',
  maxWidth: '1800px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 10px',
  },
});

export const RequstsTable = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  border: '1px solid #C6C6C9',
  borderRadius: '5px',
  backgroundColor: '#f1f1f140',
});

export const Row = styled('div')({
  display: 'flex',
  padding: '10px 0',
  borderBottom: '1px solid #C6C6C9',
  '&:first-child': {
    paddingTop: 0,
  },
  '&:last-child': {
    paddingBottom: 0,
    border: 'none',
  },
});

export const Cell = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '270px',
  borderRight: '1px solid #C6C6C9',
  '&:last-child': {
    border: 'none',
  },
  [theme.breakpoints.down('xl')]: {
    width: '200px',
  },
});

export const UserName = styled('p')({
  margin: 0,
});

export const ImageWrapper = styled('div')({
  marginRight: '10px',
  height: '40px',
  width: '40px',
});

export const Text = styled('p')<{ bold?: boolean }>(({ bold }) => ({
  margin: 0,
  padding: '0 10px',
  ...(bold && {
    fontWeight: '500',
  }),
}));

export const ActionButton = styled(Button)({
  height: '32px',
  width: '100px',
});
