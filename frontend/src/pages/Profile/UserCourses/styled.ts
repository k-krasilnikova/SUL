import styled from 'styled-components';
import List from '@mui/material/List';
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
});
export const MaterialsList = styled('div')({
  padding: '10px',
});
export const MaterialInfo = styled('div')({
  display: 'inline-flex',
  backgroundColor: '#f5f5f5',
  width: '200px',
  height: '100px',
  margin: '5px',
  border: '1px solid #efefef',
  borderRadius: '5px',
  padding: '20px',
});
export const CourseProgress = styled(CircularProgress)({
  margin: '10px 20px 10px 5px',
  color: '#1bc02c',
});
