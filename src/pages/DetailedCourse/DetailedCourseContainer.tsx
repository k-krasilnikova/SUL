/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';

import DetailedCourse from './DetailedCourse';

const DetailedCourseContainer: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params.courseId);
  const { mutate, status } = useApplyCourse();
  const [targetId, setSpinner] = useState<string | undefined>();

  const ID_FOR_BUTTONS = {
    start: 'start',
    course: 'course',
  };

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setSpinner((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  return data ? (
    <DetailedCourse
      handleApplyCourse={handleApplyCourse}
      status={status}
      buttonId={ID_FOR_BUTTONS}
      targetId={targetId}
    />
  ) : null;
};

export default DetailedCourseContainer;
