import React, { useState } from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';

import DetailedCourse from './DetailedCourse';

const DetailedCourseContainer: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params.courseId);
  const { mutate, status } = useApplyCourse();
  const [targetId, setTargetId] = useState<string | undefined>();

  const BUTTON_ID = {
    start: 'start',
    course: 'course',
  };

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setTargetId((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  return data ? (
    <DetailedCourse
      handleApplyCourse={handleApplyCourse}
      status={status}
      buttonId={BUTTON_ID}
      targetId={targetId}
    />
  ) : null;
};

export default DetailedCourseContainer;
