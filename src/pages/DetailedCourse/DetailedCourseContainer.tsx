import React, { useState } from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';
import useGetClientCourseInfo from 'api/myCourses/getMyCourseInfo';

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
  const { data } = useGetInfo(params.courseId);
  const { mutate, isLoading } = useApplyCourse();
  const [targetId, setTargetId] = useState<string | undefined>();

  const BUTTON_ID = {
    start: 'start',
    course: 'course',
  };

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setTargetId((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  const windowWidth = window.innerWidth < 1440 ? 'small' : 'large';

  return data ? (
    <DetailedCourse
      handleApplyCourse={handleApplyCourse}
      isLoading={isLoading}
      buttonId={BUTTON_ID}
      targetId={targetId}
      page={page}
      id={data._id}
      windowWidth={windowWidth}
    />
  ) : null;
};

export default DetailedCourseContainer;
