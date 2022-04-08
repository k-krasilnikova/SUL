import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

import { REQUEST_STATUS } from 'constants/requests';
import theme from 'themeSettings';

interface IStatus {
  status?: string;
}

export const ImageWrapper = styled('div')({
  height: '50px',
  width: '50px',
});

export const CourseImageWrapper = styled('div')({
  margin: '2px 8px 0 35px !important',
  height: '20px',
  width: '30px',
});

export const Text = styled('p')({
  margin: 0,
  padding: '0 10px',
  fontSize: '18px',
  fontWeight: '400',
  letterSpacing: '0.01em',
});

export const DisabledText = styled(Text)({
  color: '#8e8e93',
  fontSize: '16px',
});

export const CourseTitle = styled(Text)<IStatus>(({ status }) => ({
  color: '#2c2525',
  padding: '0',
  lineHeight: '21px',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#8e8e93',
  }),
}));

export const UserName = styled(Text)<IStatus>(({ status }) => ({
  whiteSpace: 'nowrap',
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
  marginRight: '60px',
  whiteSpace: 'nowrap',
  ...(status !== REQUEST_STATUS.pending && {
    color: '#c6c6c9',
  }),
  [theme.breakpoints.down('xl')]: {
    marginRight: '30px',
  },
  [theme.breakpoints.down(1300)]: {
    marginRight: '10px',
  },
}));

export const RequestContainer = styled(Grid)({
  marginBottom: '26px !important',
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
  marginTop: '6px !important',
});

export const TimeContainer = styled(CustomGrid)({
  justifyContent: 'flex-end',
  marginTop: '8px !important',
});
