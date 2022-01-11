import styled from 'styled-components';
import { List, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import theme from 'themeSettings';

export const CoursesBox = styled('div')({
  width: '95%',
  marginRight: '5%',
  padding: '10px',
});
export const CoursesList = styled(List)({
  width: '100%',
});
export const CoursesListItem = styled('div')({
  fontFamily: '"Lato", sans-serif',
  color: 'black',
  fontWeight: 'bold',
  padding: '10px',
});
export const CourseTitle = styled('div')({
  display: 'flex',
  width: '100%',
});
export const Title = styled('div')({
  fontWeight: 'bold',
  marginLeft: '5px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
});
export const MaterialsList = styled('div')({
  padding: '10px',
});
export const MaterialInfo = styled('div')({
  [theme.breakpoints.up('xs')]: {
    width: '160px',
    height: '70px',
    padding: '10px',
  },
  [theme.breakpoints.up('md')]: {
    width: '200px',
    height: '100px',
    padding: '20px',
  },
  display: 'inline-flex',
  backgroundColor: '#f5f5f5',
  margin: '5px',
  border: '1px solid #efefef',
  borderRadius: '5px',
});
export const CourseProgress = styled(CircularProgress)({
  [theme.breakpoints.up('xs')]: {
    margin: '2px 10px 5px 3px',
  },
  [theme.breakpoints.up('md')]: {
    margin: '10px 20px 10px 5px',
  },
  color: '#1bc02c',
});
export const MaterialInfoText = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
});
