import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';
import { Input } from '@mui/material';

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

export const RequestsTable = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
});

export const Row = styled('div')({
  display: 'flex',
  padding: '13px 0',
  '&:first-child': {
    paddingTop: 0,
  },
  '&:last-child': {
    paddingBottom: 0,
  },
});

export const Cell = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.down('xl')]: {
    width: '200px',
  },
});

export const CourseCell = styled(Cell)({
  justifyContent: 'flex-start',
  width: '270px',
});

export const TimeCell = styled(Cell)({
  marginRight: '43px',
  marginLeft: '52px',
  justifyContent: 'flex-end',
  width: 'fit-content',
});

export const ButtonCell = styled(Cell)({
  marginRight: '24px',
  justifyContent: 'flex-end',
  width: 'fit-content',
});

export const ImageWrapper = styled('div')({
  marginRight: '6px',
  height: '50px',
  width: '50px',
});

export const CourseImageWrapper = styled('div')({
  marginRight: '8px',
  height: '14.25px',
  width: '19px',
  marginLeft: '64px',
});

export const Text = styled('p')<{ bold?: boolean }>(({ bold }) => ({
  margin: 0,
  padding: '0 10px',
  fontSize: '18px',
  fontWeight: '400',
  letterSpacing: '0.01em',
  ...(bold && {
    fontWeight: '500',
  }),
}));

export const CourseTitle = styled(Text)({
  color: '#2c2525',
  whiteSpace: 'nowrap',
  padding: '0',
  lineHeight: '21px',
});

export const UserName = styled(Text)({
  whiteSpace: 'nowrap',
  lineHeight: '21px',
});

export const Position = styled(Text)({
  fontSize: '16px',
  lineHeight: '18px',
  marginTop: '10px',
});

export const SecondaryText = styled(Text)({
  color: '#8e8e93',
});

export const ActionButton = styled(Button)({
  height: '32px',
  width: '64px',
  '&.MuiButton-root': {
    fontWeight: '400',
    fontSize: '14px',
  },
});

export const InterviewActionButton = styled(ActionButton)({
  height: '32px',
  width: '158px',
  '&.MuiButton-root': {
    padding: '0',
  },
});

export const SearchWrapper = styled('div')({
  marginLeft: '82px',
  marginTop: '21px',
});

export const SearchEmployee = styled(Input)({
  fontSize: '18px!important',
});
