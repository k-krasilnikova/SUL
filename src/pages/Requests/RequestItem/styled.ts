import { styled, Box, Grid } from '@mui/material';

import { REQUEST_STATUS } from 'constants/requests';
import { CourseStatus } from 'enums/course';
import theme from 'themeSettings';

interface IStatus {
  status?: CourseStatus;
}

export const ImageWrapper = styled('div')({
  height: '60px',
  width: '60px',
});

export const CourseImageWrapper = styled('div')({
  minHeight: '40px',
  height: '40px',
  minWidth: '72px',
  width: '72px',
  [theme.breakpoints.down('xl')]: {
    minHeight: '34px',
    height: '34px',
    minWidth: '64px',
    width: '64px',
  },
  [theme.breakpoints.down('lg')]: {
    minHeight: '30px',
    height: '30px',
    minWidth: '54px',
    width: '54px',
  },
});

export const Text = styled('p')({
  margin: 0,
  padding: '0 10px',
  fontSize: '18px',
  fontWeight: 400,
  letterSpacing: '0.01em',
});

export const DisabledText = styled(Text)({
  color: '#8e8e93',
  fontSize: '16px',
});

export const CourseTitle = styled(Text)<IStatus>(({ status }) => ({
  position: 'relative',
  color: '#2c2525',
  padding: 0,
  paddingLeft: '10px',
  lineHeight: '21px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#8e8e93',
  }),
}));

export const UserName = styled(Text)<IStatus>(({ status }) => ({
  lineHeight: '21px',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#8e8e93',
  }),
}));

export const Position = styled(Text)<IStatus>(({ status }) => ({
  fontSize: '16px',
  lineHeight: '18px',
  marginTop: '10px',
  color: '#131313',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#c6c6c9',
  }),
}));

export const SecondaryText = styled(Text)<IStatus>(({ status }) => ({
  color: '#8e8e93',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#c6c6c9',
  }),
}));

export const RequestContainer = styled(Grid)({
  justifyContent: 'end',
  marginBottom: '26px',
});

export const UserContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const CustomGrid = styled(Grid)({
  display: 'flex',
});

export const DisabledContainer = styled(CustomGrid)({
  display: 'flex',
  justifyContent: 'center',
});

export const CourseContainer = styled(CustomGrid)({
  justifyContent: 'flex-start',
  marginTop: '6px',
});

export const TimeContainer = styled(CustomGrid)({
  justifyContent: 'center',
  marginTop: '8px',
});
