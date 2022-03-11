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
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';
import { backIconMobile } from 'icons';
import { MobileSearch } from 'components/Layout/MobileSearch';
import { PAGES } from 'constants/pages';
import { INFO } from 'constants/coutseInfoTypes';
import { COURSE_LABELS } from 'constants/statuses';
import {
  COMPLETED_STATUS_TEXT,
  OPEN_FULL_TEXT,
  PERCENTAGE_VALUE,
  PROGRESS_COLOR,
} from 'constants/detailedCourse';
import { IDetailedCourse } from 'types/detailedCourse';
import { VARIANTS } from 'constants/progressBar';

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
  DetailedCourseTextMobile,
  ButtonFullText,
  BackArrow,
  BackLink,
  MobileSearchWrapper,
  ContinueTestButton,
} from './styled';

const DetailedCourse: React.FC<IDetailedCourse> = ({
  courseData,
  handleApplyCourse,
  isLoading,
  targetId,
  buttonId,
  page,
  id,
  status,
  windowWidth,
  isFullTextOpen,
  toggleFullText,
  isCourseApplicationSubmitted,
  isCourseStatusPending,
  isCourseLearningDisabled,
  isCourseCompleted,
  isCourseStatusTesting,
}) => (
  <AuthorizedLayout pageName="Course">
    <DetailedCourseWrapper>
      <BackLink to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}>
        <BackButton variant="medium" color="primary">
          Back
        </BackButton>
        <BackArrow alt="" src={backIconMobile} />
      </BackLink>
      <MobileSearchWrapper>
        <MobileSearch />
      </MobileSearchWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <Image imageUrl={courseData.avatar} />
        </ImageWrapper>
        {isCourseApplicationSubmitted && !isCourseStatusPending && (
          <ProgressBar
            size="large"
            text={isCourseCompleted ? COMPLETED_STATUS_TEXT : PERCENTAGE_VALUE}
            textColor={PROGRESS_COLOR}
            variant={isCourseCompleted && VARIANTS.successful}
          />
        )}
        <DetailedCourseTitle>{courseData.title}</DetailedCourseTitle>
        {isFullTextOpen ? (
          <DetailedCourseTextMobile>{courseData.description}</DetailedCourseTextMobile>
        ) : (
          <DetailedCourseTextMobile>
            {courseData.description.slice(0, 140)}
            <ButtonFullText onClick={toggleFullText}>
              {!isFullTextOpen && OPEN_FULL_TEXT}
            </ButtonFullText>
          </DetailedCourseTextMobile>
        )}
        <DetailedCourseText>{courseData.description}</DetailedCourseText>
        <DetailedCourseActionsBox>
          <CourseInfoBox>
            <CourseInfo
              duration={courseData.duration}
              lessons={courseData.lessons}
              type={INFO.detailedCourse}
            />
          </CourseInfoBox>
          {isLoading && targetId === buttonId.start ? (
            <StartButton id={buttonId.start} variant="mediumOutlined" disabled>
              <ButtonLoader buttonSpinner={buttonSpinner} />
            </StartButton>
          ) : (
            <div>
              {page === PAGES.myCourses && isCourseStatusTesting ? (
                <Link to={`${PATHS.learnCourse}/${id}/test`}>
                  <ContinueTestButton color="primary" variant="mediumContained">
                    Continue the test
                  </ContinueTestButton>
                </Link>
              ) : (
                <Link to={`${PATHS.learnCourse}/${id}`}>
                  {isCourseCompleted ? (
                    <StartButton variant="completed" disabled>
                      Completed
                    </StartButton>
                  ) : (
                    <StartButton
                      color="primary"
                      variant="mediumContained"
                      disabled={isCourseLearningDisabled}
                    >
                      {COURSE_LABELS[status]}
                    </StartButton>
                  )}
                </Link>
              )}
              {page === PAGES.coursesList && (
                <StartButton
                  id={buttonId.start}
                  color="primary"
                  variant="mediumContained"
                  onClick={(event) => handleApplyCourse(event)}
                >
                  Apply the course
                </StartButton>
              )}
            </div>
          )}
        </DetailedCourseActionsBox>
        <SimilarCoursesWrapper container xs={12}>
          <Grid item xs={12}>
            <SimilarCoursesTitle>Similar courses</SimilarCoursesTitle>
            <SimilarCoursesItemWrapper>
              <CourseItem
                title={courseData.title}
                description={courseData.description}
                duration={courseData.duration}
                lessons={courseData.lessons}
                windowWidth={windowWidth}
                type={INFO.similarCourses}
                pageName={PAGES.detailed}
                imageUrl={courseData.avatar}
              >
                <CourseActionsBox>
                  <CourseActions>
                    <DetailsButton color="primary" variant="mediumOutlined">
                      Details
                    </DetailsButton>
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
