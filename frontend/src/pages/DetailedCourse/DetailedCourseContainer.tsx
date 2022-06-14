import { useState, useEffect, FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useApplyCourse, useGetCourseInfo } from 'api/courses';
import { useGetClientCourseInfo } from 'api/myCourses';
import { useGetProfile } from 'api/profile';
import { Role } from 'constants/menuRoles';
import { PAGES } from 'constants/pages';
import { CourseStatus } from 'enums/course';
import { useToggle } from 'hooks';
import { ICourse } from 'types/course';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';
import {
  convertCourseStatusToProgress,
  ConvertedProgress,
} from 'utils/helpers/convertCourseStatusToProgress';
import { MAX_LENGTH } from 'utils/helpers/shortifyDetailedCourseDescription';

import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';
import DetailedCourse from './DetailedCourse';
import { IDetailedCourseContainerProps } from './types';

const DetailedCourseContainer: FC<IDetailedCourseContainerProps> = ({ page }) => {
  const params = useParams();
  const navigate = useNavigate();

  const useGetInfo = page === PAGES.coursesList ? useGetCourseInfo : useGetClientCourseInfo;

  const { data: courseData, isLoading: isDataLoading } = useGetInfo(params.courseId as string);
  const { mutate, isLoading } = useApplyCourse();

  const isCourseApplicationSubmitted = courseData ? Boolean(courseData.status) : false;

  const isProgressBarDisplayed = courseData
    ? isCourseApplicationSubmitted &&
      courseData.status !== CourseStatus.pending &&
      courseData.status !== CourseStatus.rejected
    : false;

  const isCourseCompleted = courseData?.status === CourseStatus.completed;

  const handleApplyCourse = (): void => {
    mutate(params.courseId);
  };

  const windowWidth = getWindowLabelByWidth();

  let commonCourseInfo: ICourse | undefined;
  let clientCourseInfo;

  if (courseData && 'course' in courseData) {
    const { course, ...clientCourse } = courseData;
    [commonCourseInfo, clientCourseInfo] = [course, clientCourse];
  } else {
    commonCourseInfo = courseData;
  }

  const isDescriptionLengthExceed =
    commonCourseInfo && commonCourseInfo.description.length >= MAX_LENGTH;

  const [isFullTextOpen, toggleFullTextOpen] = useToggle(isDescriptionLengthExceed);

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
      {!isDataLoading && commonCourseInfo && courseData ? (
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
          isDescriptionLengthExceed={isDescriptionLengthExceed}
          toggleFullText={toggleFullTextOpen}
          isProgressBarDisplayed={isProgressBarDisplayed}
          isCourseCompleted={isCourseCompleted}
        />
      ) : (
        <Loader type={Loaders.component} />
      )}
    </>
  );
};

export default DetailedCourseContainer;
