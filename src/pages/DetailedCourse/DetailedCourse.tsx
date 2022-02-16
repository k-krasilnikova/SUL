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
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import {
  BackButton,
  CourseActionsBox,
  CourseInfoBox,
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
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  buttonId: {
    [key: string]: string | undefined;
  };
  page: string;
  id: string;
  windowWidth: string;
  isLoading?: boolean;
  targetId?: string | undefined;
}

const PAGES = {
  myCourses: 'myCourses',
  coursesList: 'coursesList',
};

const DetailedCourse: React.FC<IProps> = ({
  handleApplyCourse,
  isLoading,
  targetId,
  buttonId,
  page,
  id,
  windowWidth,
}) => (
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
        <DetailedCourseTitle>{INITIAL_DETAILED_COURSE.title}</DetailedCourseTitle>
        <DetailedCourseText>{INITIAL_DETAILED_COURSE.description}</DetailedCourseText>
        <DetailedCourseActionsBox>
          <CourseInfoBox>
            <CourseInfo
              duration={INITIAL_DETAILED_COURSE.duration}
              lessons={INITIAL_DETAILED_COURSE.lessons}
            />
          </CourseInfoBox>
          {isLoading && targetId === buttonId.start ? (
            <StartButton id={buttonId.start} variant="mediumOutlined" disabled>
              <ButtonLoader buttonSpinner={buttonSpinner} />
            </StartButton>
          ) : (
            <div>
              {page === PAGES.myCourses && (
                <Link to={`${PATHS.learnCourse}/${id}`}>
                  <StartButton variant="large" color="primary">
                    Start
                  </StartButton>
                </Link>
              )}
              {page === PAGES.coursesList && (
                <StartButton
                  id={buttonId.start}
                  variant="large"
                  color="primary"
                  onClick={(event) => handleApplyCourse(event)}
                >
                  Start
                </StartButton>
              )}
            </div>
          )}
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
                windowWidth={windowWidth}
                type="similarCourses"
              >
                <CourseActionsBox>
                  <CourseActions>
                    <DetailsButton color="primary" variant="mediumOutlined">
                      Details
                    </DetailsButton>
                    {isLoading && targetId === buttonId.course ? (
                      <StartCourseButton variant="mediumOutlined" disabled>
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      </StartCourseButton>
                    ) : (
                      <StartCourseButton
                        id={buttonId.course}
                        onClick={(event) => {
                          handleApplyCourse(event);
                        }}
                        variant="mediumContained"
                      >
                        Start the course
                      </StartCourseButton>
                    )}
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
