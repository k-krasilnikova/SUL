import styled from 'styled-components';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled('div')({
  [theme.breakpoints.up('lg')]: {
    maxHeight: '100vh',
    maxWidth: '100%',
    overflowY: 'scroll',
    margin: '0px !important',
    marginTop: '25px !important',
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: '100vh',
    maxWidth: '100%',
    overflowY: 'scroll',
    margin: '0px !important',
    marginTop: '25px !important',
  },
  border: '1px solid #ebebeb',
  borderRadius: '10px',
});

export const CourseButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    margin: '3px',
    fontSize: '10px',
    alignSelf: 'center',
    height: '40px',
    width: '120px',
    lineHeight: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '140px',
    marginLeft: '5px',
    height: '40px',
    fontSize: '10px',
    alignSelf: 'center',
    lineHeight: '10px',
  },
});

export const CourseActions = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
  },
});
