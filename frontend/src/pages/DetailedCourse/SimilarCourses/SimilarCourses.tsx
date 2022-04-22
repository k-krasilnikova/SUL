import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import Course from 'components/Course';
import { SIMILAR_COURSES_TITLE } from 'constants/detailedCourse';
import { PAGES } from 'constants/pages';
import { CourseActionsWrapper } from 'pages/CoursesList/CourseActions/styled';
import { ISimilarCourses } from 'types/detailedCourse';
import { Info } from 'enums/info';

import {
  CourseActionsBox,
  SimilarCoursesItemWrapper,
  SimilarCoursesTitle,
  SimilarCoursesWrapper,
} from './styled';
import transformRoute from '../../../utils/helpers/paths/transformRoute';
import { PATHS } from '../../../constants/routes';

const SimilarCourses: React.FC<ISimilarCourses> = ({ similarCourses, windowWidth }) => (
  <SimilarCoursesWrapper container xs={12}>
    <Grid item xs={12}>
      <SimilarCoursesTitle>{SIMILAR_COURSES_TITLE}</SimilarCoursesTitle>
      {similarCourses.map((course) => (
        <SimilarCoursesItemWrapper key={course._id}>
          <Course
            title={course.title}
            description={course.description}
            windowWidth={windowWidth}
            type={Info.similarCourses}
            pageName={PAGES.detailed}
            imageUrl={course.avatar}
          >
            <CourseActionsBox>
              <CourseActionsWrapper>
                <CustomButton
                  color="primary"
                  variant="mediumOutlined"
                  component={Link}
                  to={transformRoute(PATHS.courseDetails, course._id)}
                >
                  {ButtonLabels.details}
                </CustomButton>
              </CourseActionsWrapper>
            </CourseActionsBox>
          </Course>
        </SimilarCoursesItemWrapper>
      ))}
    </Grid>
  </SimilarCoursesWrapper>
);

export default SimilarCourses;
