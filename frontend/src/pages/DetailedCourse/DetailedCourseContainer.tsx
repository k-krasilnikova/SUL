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
  const [filterSpinner, setSpinner] = useState<string | undefined>();

  const handleApplyCourse = (event: any): void => {
    setSpinner(event?.target?.id);
    mutate(params.courseId);
  };

  return data ? (
    <DetailedCourse
      handleApplyCourse={handleApplyCourse}
      status={status}
      filterSpinner={filterSpinner}
    />
  ) : null;
};

export default DetailedCourseContainer;
