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
import { backIconMobile } from 'icons';
import MobileSearch from 'components/Layout/MobileSearch';
import { PAGES } from 'constants/pages';

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
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  buttonId: {
    [key: string]: string | undefined;
  };
  page: string;
  id: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  isLoading?: boolean;
  targetId?: string | undefined;
  isFilterOpen: boolean;
  handleFilterOpen: () => void;
  handleFilterClose: () => void;
  isCourseApplicationSubmitted?: boolean;
}

const OPEN_FULL_TEXT = 'Look in full';

const DetailedCourse: React.FC<IProps> = ({
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
        {isCourseApplicationSubmitted && <ProgressBar size="large" text="0%" textColor="#131313" />}
        <DetailedCourseTitle>{INITIAL_DETAILED_COURSE.title}</DetailedCourseTitle>
        {isFullTextOpen ? (
          <DetailedCourseTextMobile>{INITIAL_DETAILED_COURSE.description}</DetailedCourseTextMobile>
        ) : (
          <DetailedCourseTextMobile>
            {INITIAL_DETAILED_COURSE.description.slice(0, 140)}
            <ButtonFullText onClick={toggleFullText}>
              {!isFullTextOpen && OPEN_FULL_TEXT}
            </ButtonFullText>
          </DetailedCourseTextMobile>
        )}
        <DetailedCourseText>{INITIAL_DETAILED_COURSE.description}</DetailedCourseText>
        <DetailedCourseActionsBox>
          <CourseInfoBox>
            <CourseInfo
              duration={INITIAL_DETAILED_COURSE.duration}
              lessons={INITIAL_DETAILED_COURSE.lessons}
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
                <StartButton variant="large" color="primary">
                  <Link to={`${PATHS.learnCourse}/${id}`}>Start the course</Link>
                </StartButton>
              )}
              {page === PAGES.coursesList && (
                <StartButton
                  id={buttonId.start}
                  variant="large"
                  color="primary"
                  onClick={(event) => handleApplyCourse(event)}
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
                title={INITIAL_DETAILED_COURSE.title}
                description={INITIAL_DETAILED_COURSE.description}
                duration={INITIAL_DETAILED_COURSE.duration}
                lessons={INITIAL_DETAILED_COURSE.lessons}
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
