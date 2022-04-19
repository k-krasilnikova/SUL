import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useApplyCourse, useGetCourseInfo } from 'api/courses';
import { useGetClientCourseInfo } from 'api/myCourses';
import { useGetProfile } from 'api/profile';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import {
  convertCourseStatusToProgress,
  ConvertedProgress,
} from 'utils/helpers/convertCourseStatusToProgress';
import { Role } from 'constants/menuRoles';
import { PAGES } from 'constants/pages';
import { CourseStatus } from 'enums/courseEnums';

import DetailedCourse from './DetailedCourse';

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
  const isProgressBarDisplayed = courseData
    ? isCourseApplicationSubmitted &&
      courseData.status !== CourseStatus.pending &&
      courseData.status !== CourseStatus.rejected
    : false;
  const isCourseCompleted = courseData?.status === CourseStatus.completed;

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

  const { data: profileResponse } = useGetProfile();
  const isAdmin = profileResponse?.role === Role.admin;

  let progressValue;
  let progressText;
  let progressVariant;

  const [currentProgress, setCurrentProgress] = useState<ConvertedProgress>();

  useEffect(() => {
    if (courseData) {
      const progress = convertCourseStatusToProgress(courseData.status);
      setCurrentProgress(progress);
    }
  }, [courseData]);

  if (currentProgress) {
    progressValue = currentProgress.progressValue;
    progressText = currentProgress.progressText;
    progressVariant = currentProgress.progressVariant;
  }

  return (
    <>
      {commonCourseInfo && courseData && (
        <DetailedCourse
          isAdmin={isAdmin}
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
          isProgressBarDisplayed={isProgressBarDisplayed}
          isCourseCompleted={isCourseCompleted}
        />
      )}
    </>
  );
};

export default DetailedCourseContainer;
