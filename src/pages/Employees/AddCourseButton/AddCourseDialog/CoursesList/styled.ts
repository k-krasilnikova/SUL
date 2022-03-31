import styled from 'styled-components';
import { List } from '@mui/material';

import { CoursesListType } from 'types/course';

interface IPropsCoursesList {
  type: CoursesListType;
}

export const StyledList = styled(List)<IPropsCoursesList>(({ type }) => ({
  '&.MuiList-root': {
    padding: '0',
    marginBottom: '16px',
  },
  textAlign: 'left',
  ...(type === CoursesListType.COURSES && {
    height: '248px',
    overflowY: 'auto',
  }),
}));

export const StyledHorizontalLine = styled('hr')({
  margin: '16px 0',
});
