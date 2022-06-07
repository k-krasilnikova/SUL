import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { DEFAULT_DISPLAYING_COURSES } from 'constants/detailedCourse';
import { PAGES } from 'constants/pages';
import { Info } from 'enums/info';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import Course from 'components/Course';
import MobileLink from 'components/MobileLink';
import { CourseActionsWrapper } from 'pages/CoursesList/CourseActions/styled';
import CourseInfoBlock from 'pages/DetailedCourse/components/CourseInfoBlock';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';

import { SimilarCoursesItemWrapper, CourseActionsBox } from './styled';
import { ISimilarCourses } from '../types';

const SimilarCourses: FC<ISimilarCourses> = ({ similarCourses, windowWidth }) => (
  <CourseInfoBlock title="Similar Courses">
    <Grid item xs={12}>
      {similarCourses.map((course, index) => {
        const isCourseDisplaying = index < DEFAULT_DISPLAYING_COURSES;
        return (
          isCourseDisplaying && (
            <SimilarCoursesItemWrapper key={course._id}>
              <MobileLink to={transformRoute(PATHS.courseDetails, course._id)}>
                <Course
                  title={course.title}
                  description={course.description}
                  windowWidth={windowWidth}
                  type={Info.similarCourses}
                  pageName={PAGES.detailed}
                  imageUrl={course.avatar}
                  duration={convertDurationToString(course.duration)}
                  lessons={course.lessons}
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
              </MobileLink>
            </SimilarCoursesItemWrapper>
          )
        );
      })}
    </Grid>
  </CourseInfoBlock>
);

export default SimilarCourses;
