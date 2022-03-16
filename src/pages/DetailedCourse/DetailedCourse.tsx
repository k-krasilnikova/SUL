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
import { ClientCourse } from 'types/clientCourse';
import {
  COMPLETED_STATUS_TEXT,
  OPEN_FULL_TEXT,
  PERCENTAGE_VALUE,
  PROGRESS_COLOR,
} from 'constants/detailedCourse';
import { IDetailedCourse } from 'types/detailedCourse';
import { VARIANTS } from 'constants/progressBar';
import DeclinedButton from 'components/Button/DeclinedButton';

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
  commonCourseData,
  clientCourseData,
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
  isCourseDeclined,
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
          <Image imageUrl={commonCourseData.avatar} />
        </ImageWrapper>
        {isCourseApplicationSubmitted && !isCourseStatusPending && (
          <ProgressBar
            size="large"
            text={isCourseCompleted ? COMPLETED_STATUS_TEXT : PERCENTAGE_VALUE}
            textColor={PROGRESS_COLOR}
            variant={isCourseCompleted && VARIANTS.successful}
          />
        )}
        <DetailedCourseTitle>{commonCourseData.title}</DetailedCourseTitle>
        {isFullTextOpen ? (
          <DetailedCourseTextMobile>{commonCourseData.description}</DetailedCourseTextMobile>
        ) : (
          <DetailedCourseTextMobile>
            {commonCourseData.description.slice(0, 140)}
            <ButtonFullText onClick={toggleFullText}>
              {!isFullTextOpen && OPEN_FULL_TEXT}
            </ButtonFullText>
          </DetailedCourseTextMobile>
        )}
        <DetailedCourseText>{commonCourseData.description}</DetailedCourseText>
        <DetailedCourseActionsBox>
          <CourseInfoBox>
            <CourseInfo
              duration={commonCourseData.duration}
              lessons={commonCourseData.lessons}
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
              ) : page === PAGES.myCourses && isCourseCompleted ? (
                <></>
              ) : (
                <>
                  {isCourseDeclined ? (
                    <DeclinedButton clientCourse={clientCourseData as unknown as ClientCourse} />
                  ) : (
                    <StartButton
                      color="primary"
                      variant="mediumContained"
                      disabled={isCourseLearningDisabled}
                    >
                      <Link to={`${PATHS.learnCourse}/${id}`}>{COURSE_LABELS[status]}</Link>
                    </StartButton>
                  )}
                </>
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
                title={commonCourseData.title}
                description={commonCourseData.description}
                duration={commonCourseData.duration}
                lessons={commonCourseData.lessons}
                windowWidth={windowWidth}
                type={INFO.similarCourses}
                pageName={PAGES.detailed}
                imageUrl={commonCourseData.avatar}
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
