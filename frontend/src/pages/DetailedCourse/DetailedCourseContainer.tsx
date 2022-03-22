import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useApplyCourse, useGetCourseInfo } from 'api/courses';
import { useGetClientCourseInfo } from 'api/myCourses';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import { COURSE_STATUSES } from 'constants/statuses';
import { PAGES } from 'constants/pages';

import DetailedCourse from './DetailedCourse';
import { COMPLETED_STATUS_TEXT, FAILED_STATUS_TEXT } from '../../constants/detailedCourse';
import { VARIANTS } from '../../constants/progressBar';

interface Props {
  page: string;
}

const DetailedCourseContainer: React.FC<Props> = ({ page }) => {
  const params = useParams();
  const navigate = useNavigate();
  const useGetInfo = page === PAGES.coursesList ? useGetCourseInfo : useGetClientCourseInfo;
  const { data: courseData } = useGetInfo(params.courseId);
  const { mutate, isLoading } = useApplyCourse();
  const [isFullTextOpen, setFullTextOpen] = useState(false);
  const isCourseApplicationSubmitted = courseData ? Boolean(courseData.status) : false;
  const isCourseCompleted = courseData
    ? [COURSE_STATUSES.successful, COURSE_STATUSES.completed].includes(courseData.status)
    : false;

  const toggleFullText = () => {
    setFullTextOpen(true);
  };

  const handleApplyCourse = (): void => {
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

  let progressValue;
  let progressText;
  let progressVariant;

  if (courseData) {
    switch (courseData.status) {
      case COURSE_STATUSES.started:
        progressValue = 37;
        progressText = '37%';
        progressVariant = VARIANTS.failed;
        break;
      case COURSE_STATUSES.testing:
        progressValue = 80;
        progressText = '80%';
        progressVariant = VARIANTS.completed;
        break;
      case COURSE_STATUSES.completed:
        progressValue = 100;
        progressText = COMPLETED_STATUS_TEXT;
        progressVariant = VARIANTS.completed;
        break;
      case COURSE_STATUSES.failed:
        progressValue = 0;
        progressText = FAILED_STATUS_TEXT;
        progressVariant = VARIANTS.failed;
        break;
      default:
        progressValue = 0;
        progressText = '0%';
        progressVariant = VARIANTS.failed;
        break;
    }
  }

  return (
    <>
      {commonCourseInfo && courseData && (
        <DetailedCourse
          navigate={navigate}
          commonCourseData={commonCourseInfo}
          clientCourseData={clientCourseInfo}
          handleApplyCourse={handleApplyCourse}
          isLoading={isLoading}
          page={page}
          id={courseData._id}
          status={courseData.status}
          progressValue={progressValue}
          progressText={progressText}
          progressVariant={progressVariant}
          windowWidth={windowWidth}
          isFullTextOpen={isFullTextOpen}
          toggleFullText={toggleFullText}
          isCourseApplicationSubmitted={isCourseApplicationSubmitted}
          isCourseCompleted={isCourseCompleted}
        />
      )}
    </>
  );
};

export default DetailedCourseContainer;
