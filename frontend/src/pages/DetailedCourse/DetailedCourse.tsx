import React from 'react';

import { AuthorizedLayout, MobileSearch } from 'components/Layout';
import { IDetailedCourse } from 'types/detailedCourse';

import { DetailedCourseWrapper, InnerWrapper, MobileSearchWrapper } from './styled';
import BackButton from './BackButton';
import SimilarCourses from './SimilarCourses';
import DetailedCourseActions from './DetailedCourseActions';
import DetailedCourseInfo from './DetailedCourseInfo';

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
  isProgressBarDisplayed,
  isAdmin,
  isCourseCompleted,
}) => (
  <AuthorizedLayout pageName="Course">
    <DetailedCourseWrapper>
      <BackButton page={page} />
      <MobileSearchWrapper>
        <MobileSearch />
      </MobileSearchWrapper>
      <InnerWrapper>
        <DetailedCourseInfo
          commonCourseData={commonCourseData}
          isProgressBarDisplayed={isProgressBarDisplayed}
          toggleFullText={toggleFullText}
          progressValue={progressValue}
          progressText={progressText}
          progressVariant={progressVariant}
          isFullTextOpen={isFullTextOpen}
        />
        <DetailedCourseActions
          commonCourseData={commonCourseData}
          clientCourseData={clientCourseData}
          isAdmin={isAdmin}
          isLoading={isLoading}
          handleApplyCourse={handleApplyCourse}
          page={page}
          id={id}
          status={status}
          isCourseCompleted={isCourseCompleted}
        />
        <SimilarCourses commonCourseData={commonCourseData} windowWidth={windowWidth} />
      </InnerWrapper>
    </DetailedCourseWrapper>
  </AuthorizedLayout>
);

export default DetailedCourse;
