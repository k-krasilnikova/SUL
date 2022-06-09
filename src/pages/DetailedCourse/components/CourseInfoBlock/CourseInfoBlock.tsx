import { FC } from 'react';
import { Grid } from '@mui/material';

import { ICourseInfoBlockProps } from 'pages/DetailedCourse/types';

import { CourseInfoBlockWrapper, CourseInfoBlockTitle } from './styled';

const CourseInfoBlock: FC<ICourseInfoBlockProps> = ({ title, children }) => (
  <CourseInfoBlockWrapper container xs={12}>
    <Grid item xs={12}>
      <CourseInfoBlockTitle>{title}</CourseInfoBlockTitle>
    </Grid>
    {children}
  </CourseInfoBlockWrapper>
);

export default CourseInfoBlock;
