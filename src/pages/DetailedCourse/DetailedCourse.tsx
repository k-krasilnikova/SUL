import React from 'react';
import { Grid } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import CourseInfo from 'components/Course/CourseInfo';
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
import { PROGRESS_COLOR } from 'constants/detailedCourse';
import { IDetailedCourse } from 'types/detailedCourse';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { ButtonsWrapper, CustomButton } from 'components/Button/styled';
import { COURSE_DISABLE_DAYS } from 'constants/time';
import ActionButton from 'components/Button/ActionButton';
import { CourseItem } from 'components/Course';
import { ButtonLabels } from 'components/Button/ButtonsEnums';

import {
  BackButton,
  CourseActionsBox,
  CourseInfoBox,
  DetailedCourseActionsBox,
  DetailedCourseText,
  DetailedCourseTitle,
  DetailedCourseWrapper,
  ImageWrapper,
  InnerWrapper,
  SimilarCoursesItemWrapper,
  SimilarCoursesTitle,
  SimilarCoursesWrapper,
  DetailedCourseTextMobile,
  ButtonFullText,
  BackArrow,
  BackLink,
  MobileSearchWrapper,
} from './styled';

interface IProps extends IDetailedCourse {
  isAdmin: boolean;
}

const DetailedCourse: React.FC<IProps> = ({
  commonCourseData,
  clientCourseData,
  handleApplyCourse,
  isLoading,
  page,
  id,
  status,
  progressValue,
  progressText,
  progressVariant,
  windowWidth,
  isFullTextOpen,
  toggleFullText,
  isProgressBarDisplayed,
  isAdmin,
  isCourseCompleted,
}) => {
  const {
    title: courseTitle,
    description: courseDescription,
    duration: courseDuration,
    lessons: courseLesson,
    avatar: courseAvatar,
  } = commonCourseData;
  const isLongDescription = courseDescription.length > 140;
  const shortedDescription = courseDescription.slice(0, 140);

  return (
    <AuthorizedLayout pageName="Course">
      <DetailedCourseWrapper>
        <BackLink to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}>
          <BackButton variant="medium" color="primary">
            {ButtonLabels.back}
          </BackButton>
          <BackArrow alt="" src={backIconMobile} />
        </BackLink>
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        <InnerWrapper>
          <ImageWrapper imageUrl={courseAvatar} />
          {isProgressBarDisplayed && (
            <ProgressBar
              size="large"
              text={progressText}
              textColor={PROGRESS_COLOR}
              variant={progressVariant}
              value={progressValue}
            />
          )}
          <DetailedCourseTitle>{courseTitle}</DetailedCourseTitle>
          {isFullTextOpen ? (
            <DetailedCourseTextMobile>{courseDescription}</DetailedCourseTextMobile>
          ) : (
            <DetailedCourseTextMobile>
              {shortedDescription}
              {isLongDescription && (
                <ButtonFullText onClick={toggleFullText}>{ButtonLabels.lookInFull}</ButtonFullText>
              )}
            </DetailedCourseTextMobile>
          )}
          <DetailedCourseText>{courseDescription}</DetailedCourseText>
          <DetailedCourseActionsBox>
            <CourseInfoBox>
              <CourseInfo
                duration={convertDurationToString(courseDuration)}
                lessons={courseLesson}
                type={INFO.detailedCourse}
              />
            </CourseInfoBox>
            {!isAdmin &&
              (isLoading ? (
                <CustomButton variant="mediumOutlined" disabled>
                  <ButtonLoader buttonSpinner={buttonSpinner} />
                </CustomButton>
              ) : page === PAGES.coursesList ? (
                <CustomButton color="primary" variant="mediumContained" onClick={handleApplyCourse}>
                  {ButtonLabels.applyCourse}
                </CustomButton>
              ) : (
                <ButtonsWrapper>
                  {!isCourseCompleted && (
                    <ActionButton
                      label={COURSE_LABELS[status]}
                      status={status}
                      progress={clientCourseData?.progress}
                      timeout={COURSE_DISABLE_DAYS}
                      courseId={id}
                      applyDate={clientCourseData?.applyDate}
                    />
                  )}
                </ButtonsWrapper>
              ))}
          </DetailedCourseActionsBox>
          <SimilarCoursesWrapper container xs={12}>
            <Grid item xs={12}>
              <SimilarCoursesTitle>Similar courses</SimilarCoursesTitle>
              <SimilarCoursesItemWrapper>
                <CourseItem
                  title={courseTitle}
                  description={courseDescription}
                  duration={convertDurationToString(courseDuration)}
                  lessons={courseLesson}
                  windowWidth={windowWidth}
                  type={INFO.similarCourses}
                  pageName={PAGES.detailed}
                  imageUrl={courseAvatar}
                >
                  <CourseActionsBox>
                    <CourseActions>
                      <CustomButton color="primary" variant="mediumOutlined">
                        {ButtonLabels.details}
                      </CustomButton>
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
};

export default DetailedCourse;
