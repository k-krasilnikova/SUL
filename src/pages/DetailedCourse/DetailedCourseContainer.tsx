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
    ? [
        COURSE_STATUSES.pending,
        COURSE_STATUSES.rejected,
        COURSE_STATUSES.successful,
        COURSE_STATUSES.completed,
      ].includes(courseData.status)
    : false;
  const isCourseCompleted = courseData
    ? [COURSE_STATUSES.successful, COURSE_STATUSES.completed].includes(courseData.status)
    : false;
  const isCourseStatusPending = courseData?.status === COURSE_STATUSES.pending;

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

  const courseInfo = courseData && 'course' in courseData ? courseData.course : courseData;

  return (
    <>
      {courseInfo && courseData && (
        <DetailedCourse
          courseData={courseInfo}
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
          isCourseLearningDisabled={isCourseLearningDisabled}
        />
      )}
    </>
  );
};

export default DetailedCourseContainer;
