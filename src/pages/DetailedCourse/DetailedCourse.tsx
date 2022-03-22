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
import { ClientCourse } from 'types/clientCourse';
import { OPEN_FULL_TEXT, PROGRESS_COLOR } from 'constants/detailedCourse';
import { IDetailedCourse } from 'types/detailedCourse';
import { VARIANTS } from 'constants/progressBar';
import DeclinedButton from 'components/Button/DeclinedButton';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { ButtonsWrapper, CustomButton } from 'components/Button/styled';
import StartTestButton from 'components/Button/StartTestButton';
import { COURSE_DISABLE_DAYS, TEST_DISABLE_DAYS } from 'constants/time';
import ActionButton from 'components/Button/ActionButton';
import { countProgress } from 'utils/helpers/countCourseProgress';
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

const DetailedCourse: React.FC<IDetailedCourse> = ({
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
  isCourseApplicationSubmitted,
  isCourseCompleted,
}) => (
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
        <ImageWrapper imageUrl={commonCourseData.avatar} />
        {isCourseApplicationSubmitted && status !== COURSE_STATUSES.pending && (
          <ProgressBar
            size="large"
            text={progressText}
            textColor={PROGRESS_COLOR}
            variant={progressVariant}
            value={progressValue}
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
              duration={convertDurationToString(commonCourseData.duration)}
              lessons={commonCourseData.lessons}
              type={INFO.detailedCourse}
            />
          </CourseInfoBox>
          {isLoading ? (
            <CustomButton variant="mediumOutlined" disabled>
              <ButtonLoader buttonSpinner={buttonSpinner} />
            </CustomButton>
          ) : page === PAGES.coursesList ? (
            <CustomButton color="primary" variant="mediumContained" onClick={handleApplyCourse}>
              {ButtonLabels.applyCourse}
            </CustomButton>
          ) : (
            <ButtonsWrapper>
              <StartTestButton
                testDate={clientCourseData?.testDate}
                progress={clientCourseData?.progress}
                timeout={TEST_DISABLE_DAYS}
                status={status}
              />
              <ActionButton
                label={COURSE_LABELS[status]}
                status={status}
                progress={clientCourseData?.progress}
                timeout={COURSE_DISABLE_DAYS}
                courseId={id}
                applyDate={clientCourseData?.applyDate}
              />
            </ButtonsWrapper>
          )}
        </DetailedCourseActionsBox>
        <SimilarCoursesWrapper container xs={12}>
          <Grid item xs={12}>
            <SimilarCoursesTitle>Similar courses</SimilarCoursesTitle>
            <SimilarCoursesItemWrapper>
              <CourseItem
                title={commonCourseData.title}
                description={commonCourseData.description}
                duration={convertDurationToString(commonCourseData.duration)}
                lessons={commonCourseData.lessons}
                windowWidth={windowWidth}
                type={INFO.similarCourses}
                pageName={PAGES.detailed}
                imageUrl={commonCourseData.avatar}
              >
                <CourseActionsBox>
                  <CourseActions>
                    <CustomButton color="primary" variant="mediumOutlined">
                      {ButtonLabels.next}
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

export default DetailedCourse;
