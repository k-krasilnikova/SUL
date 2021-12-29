import styled from 'styled-components';
import { Box } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled('div')({
  [theme.breakpoints.up('lg')]: {
    maxHeight: '500px',
    maxWidth: '800px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: '600px',
    maxWidth: '1150px',
    overflowY: 'scroll',
  },
  margin: '10px auto 10px auto',
  border: '1px solid #ebebeb',
  borderRadius: '10px',
});
export const CourseContainer = styled(Box)({
  width: 'calc(100%-40px)',
  backgroundColor: '#ebebeb',
  padding: '10px',
  borderRadius: '10px',
  fontFamily: '"Lato", sans-serif',
  margin: '20px',
});
export const ImageWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    float: 'none',
    width: '300px',
    margin: '0px auto',
  },
  [theme.breakpoints.up('md')]: {
    float: 'left',
    margin: '0px 25px 5px 0px',
  },
});
export const CourseTitle = styled('p')({
  [theme.breakpoints.up('xs')]: {
    clear: 'both',
    fontSize: '16px',
    lineHeight: '26px',
    padding: '5px',
  },
  [theme.breakpoints.up('md')]: {
    clear: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '34px',
    padding: '5px',
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
});
export const CourseDescription = styled('p')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
    padding: '5px',
    marginTop: '5px',
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
});
export const CourseButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    height: '30px',
    margin: '10px',
    fontSize: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '30px 10px 30px 10px',
    fontSize: '10px',
  },
});
export const ButtonsContainer = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    height: '90px',
    margin: '10px',
    fontSize: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '50px',
    margin: '20px',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export const Divider = styled('div')({
  [theme.breakpoints.up('lg')]: {
    flex: '1 2 auto',
  },
});
