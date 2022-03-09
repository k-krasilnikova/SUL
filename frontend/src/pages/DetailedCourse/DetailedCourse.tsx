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
import MobileSearch from 'components/Layout/MobileSearch';
import { PAGES } from 'constants/pages';
import { Course } from 'types/course';

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
  DetailedCourseTextMobile,
  ButtonFullText,
  BackArrow,
  BackLink,
  MobileSearchWrapper,
} from './styled';

interface IProps {
  courseData: Course;
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  buttonId: {
    [key: string]: string | undefined;
  };
  page: string;
  id: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  isFilterOpen: boolean;
  handleFilterOpen: () => void;
  handleFilterClose: () => void;
  isCourseStatusPending: boolean;
  isLoading?: boolean;
  targetId?: string | undefined;
  isCourseApplicationSubmitted?: boolean;
}

const OPEN_FULL_TEXT = 'Look in full';

const DetailedCourse: React.FC<IProps> = ({
  courseData,
  handleApplyCourse,
  isLoading,
  targetId,
  buttonId,
  page,
  id,
  windowWidth,
  isFullTextOpen,
  toggleFullText,
  isFilterOpen,
  handleFilterOpen,
  handleFilterClose,
  isCourseApplicationSubmitted,
  isCourseStatusPending,
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
        <MobileSearch
          isFilterOpen={isFilterOpen}
          handleFilterOpen={handleFilterOpen}
          handleFilterClose={handleFilterClose}
        />
      </MobileSearchWrapper>
      <InnerWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        {isCourseApplicationSubmitted && !isCourseStatusPending && (
          <ProgressBar size="large" text="0%" textColor="#131313" />
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
              type="detailedCourse"
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
                  <StartButton
                    color="primary"
                    variant="mediumContained"
                    disabled={isCourseStatusPending}
                  >
                    Start the course
                  </StartButton>
                </Link>
              )}
              {page === PAGES.coursesList && (
                <StartButton
                  id={buttonId.start}
                  color="primary"
                  variant="mediumContained"
                  onClick={(event) => handleApplyCourse(event)}
                  disabled={isCourseStatusPending}
                >
                  Start the course
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
                type="similarCourses"
                pageName={PAGES.detailed}
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
