import styled from 'styled-components';
import { List, Divider } from '@mui/material';

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
  overflowY: 'auto',
  ...(type === CoursesListType.COURSES && {
    height: '248px',
  }),
  ...(type === CoursesListType.CHECKED_COURSES && {
    height: '92px',
  }),
}));

export const StyledHorizontalLine = styled(Divider)({
  '&.MuiDivider-root': {
    margin: '16px 0',
  },
});
