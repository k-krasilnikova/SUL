import React from 'react';
import { Grid } from '@mui/material';

import { ButtonLabels } from 'constants/ButtonLabels';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import Course from 'components/Course';
import { SIMILAR_COURSES_TITLE } from 'constants/detailedCourse';
import { PAGES } from 'constants/pages';
import { CourseActionsWrapper } from 'pages/CoursesList/CourseActions/styled';
import { ISimilarCourses } from 'types/detailedCourse';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { Info } from 'enums/info';

import {
  CourseActionsBox,
  SimilarCoursesItemWrapper,
  SimilarCoursesTitle,
  SimilarCoursesWrapper,
} from './styled';

const SimilarCourses: React.FC<ISimilarCourses> = ({ commonCourseData, windowWidth }) => (
  <SimilarCoursesWrapper container xs={12}>
    <Grid item xs={12}>
      <SimilarCoursesTitle>{SIMILAR_COURSES_TITLE}</SimilarCoursesTitle>
      <SimilarCoursesItemWrapper>
        <Course
          title={commonCourseData.title}
          description={commonCourseData.description}
          duration={convertDurationToString(commonCourseData.duration)}
          lessons={commonCourseData.lessons}
          windowWidth={windowWidth}
          type={Info.similarCourses}
          pageName={PAGES.detailed}
          imageUrl={commonCourseData.avatar}
        >
          <CourseActionsBox>
            <CourseActionsWrapper>
              <CustomButton color="primary" variant="mediumOutlined">
                {ButtonLabels.details}
              </CustomButton>
            </CourseActionsWrapper>
          </CourseActionsBox>
        </Course>
      </SimilarCoursesItemWrapper>
    </Grid>
  </SimilarCoursesWrapper>
);

export default SimilarCourses;
