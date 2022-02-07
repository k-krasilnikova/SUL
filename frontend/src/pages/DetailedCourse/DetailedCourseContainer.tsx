import React from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';

import DetailedCourse from './DetailedCourse';

const DetailedCourseContainer: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params.courseId);
  const { mutate, status } = useApplyCourse();

  const handleApplyCourse = () => {
    mutate(params.courseId);
  };

  return data ? <DetailedCourse handleApplyCourse={handleApplyCourse} status={status} /> : null;
};

export default DetailedCourseContainer;
