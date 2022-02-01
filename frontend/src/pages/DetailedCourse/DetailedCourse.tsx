import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { Image } from 'components/Image';
import CourseInfo from 'components/Course/CourseInfo';
import { CourseItem } from 'components/Course';
import { ProgressBar } from 'components/ProgressBar';
import { CourseActions } from 'pages/CoursesList/styled';
import { PATHS } from 'constants/routes';
import { INITIAL_DETAILED_COURSE } from 'constants/detailedCourse';

import {
  BackButton,
  CourseActionsBox,
  DetailedCourseActionsBox,
  DetailedCourseText,
  DetailedCourseTitle,
  DetailedCourseWrapper,
  DetailsButton,
  ImageWrapper,
  InnerWrapper,
  SimilarCoursesItemWrapper,
  SimilarCoursesTitle,
  SimilarCoursesWrapper,
  StartButton,
  StartCourseButton,
} from './styled';

interface IProps {
  handleApplyCourse?: () => void;
}

const DetailedCourse: React.FC<IProps> = ({ handleApplyCourse }) => (
  <AuthorizedLayout pageName={INITIAL_DETAILED_COURSE.title}>
    <DetailedCourseWrapper>
      <Link to={PATHS.coursesList}>
        <BackButton variant="medium" color="primary">
          Back
        </BackButton>
      </Link>
      <InnerWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <ProgressBar size="large" text="0%" />
        <DetailedCourseTitle>{INITIAL_DETAILED_COURSE.title} </DetailedCourseTitle>
        <DetailedCourseText>{INITIAL_DETAILED_COURSE.description}</DetailedCourseText>
        <DetailedCourseActionsBox>
          <CourseInfo
            duration={INITIAL_DETAILED_COURSE.duration}
            lessons={INITIAL_DETAILED_COURSE.lessons}
          />
          <StartButton variant="large" color="primary" onClick={handleApplyCourse}>
            Start
          </StartButton>
        </DetailedCourseActionsBox>
        <SimilarCoursesWrapper container xs={12}>
          <Grid item xs={8}>
            <SimilarCoursesTitle>Similar courses</SimilarCoursesTitle>
            <SimilarCoursesItemWrapper>
              <CourseItem
                title={INITIAL_DETAILED_COURSE.title}
                description={INITIAL_DETAILED_COURSE.description}
                duration={INITIAL_DETAILED_COURSE.duration}
                lessons={INITIAL_DETAILED_COURSE.lessons}
              >
                <CourseActionsBox>
                  <CourseActions>
                    <DetailsButton color="primary" variant="mediumOutlined">
                      Details
                    </DetailsButton>
                    <StartCourseButton onClick={handleApplyCourse} variant="mediumContained">
                      Start the course
                    </StartCourseButton>
                  </CourseActions>
                </CourseActionsBox>
              </CourseItem>
            </SimilarCoursesItemWrapper>
          </Grid>
        </SimilarCoursesWrapper>
      </InnerWrapper>
    </DetailedCourseWrapper>
  </AuthorizedLayout>
);

export default DetailedCourse;
