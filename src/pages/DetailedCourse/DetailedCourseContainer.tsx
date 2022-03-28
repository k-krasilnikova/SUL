import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useApplyCourse, useGetCourseInfo } from 'api/courses';
import { useGetClientCourseInfo } from 'api/myCourses';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import { COURSE_STATUSES } from 'constants/statuses';

import DetailedCourse from './DetailedCourse';

interface Props {
  page: string;
}

const PAGES = {
  myCourses: 'myCourses',
  coursesList: 'coursesList',
};

const DetailedCourseContainer: React.FC<Props> = ({ page }) => {
  const params = useParams();
  const useGetInfo = page === PAGES.coursesList ? useGetCourseInfo : useGetClientCourseInfo;
  const { data: courseData } = useGetInfo(params.courseId);
  const { mutate, isLoading } = useApplyCourse();
  const [targetId, setTargetId] = useState<string | undefined>();
  const [isFullTextOpen, setFullTextOpen] = useState(false);
  const isCourseApplicationSubmitted = courseData ? Boolean(courseData.status) : false;
  const isCourseLearningDisabled = courseData
    ? [COURSE_STATUSES.pending, COURSE_STATUSES.successful, COURSE_STATUSES.completed].includes(
        courseData.status,
      )
    : false;
  const isCourseDeclined = courseData && courseData.status === COURSE_STATUSES.rejected;
  const isCourseCompleted = courseData
    ? [COURSE_STATUSES.successful, COURSE_STATUSES.completed].includes(courseData.status)
    : false;
  const isCourseStatusPending = courseData?.status === COURSE_STATUSES.pending;
  const isCourseStatusTesting = courseData?.status === COURSE_STATUSES.testing;
  const isCourseStatusAssessment = courseData?.status === COURSE_STATUSES.assessment;

  const toggleFullText = () => {
    setFullTextOpen(true);
  };

  const BUTTON_ID = {
    start: 'start',
    course: 'course',
  };

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setTargetId((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  const windowWidth = getWindowWidth();

  let commonCourseInfo;
  let clientCourseInfo;
  if (courseData && 'course' in courseData) {
    const { course, ...clientCourse } = courseData;
    [commonCourseInfo, clientCourseInfo] = [course, clientCourse];
  } else {
    commonCourseInfo = courseData;
  }

  return (
    <>
      {commonCourseInfo && courseData && (
        <DetailedCourse
          commonCourseData={commonCourseInfo}
          clientCourseData={clientCourseInfo}
          handleApplyCourse={handleApplyCourse}
          isLoading={isLoading}
          buttonId={BUTTON_ID}
          targetId={targetId}
          page={page}
          id={courseData._id}
          status={courseData.status}
          windowWidth={windowWidth}
          isFullTextOpen={isFullTextOpen}
          toggleFullText={toggleFullText}
          isCourseApplicationSubmitted={isCourseApplicationSubmitted}
          isCourseStatusPending={isCourseStatusPending}
          isCourseCompleted={isCourseCompleted}
          isCourseDeclined={isCourseDeclined}
          isCourseLearningDisabled={isCourseLearningDisabled}
          isCourseStatusTesting={isCourseStatusTesting}
          isCourseStatusAssessment={isCourseStatusAssessment}
        />
      )}
    </>
  );
};

export default DetailedCourseContainer;
