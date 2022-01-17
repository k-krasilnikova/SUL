import React from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';

import DetailedCourse from './DetailedCourse';

const DetailedCourseContainer: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params._id);
  const mutation = useApplyCourse();
  const handleApplyCourse = () => {
    mutation.mutate(params._id);
  };

  return data ? <DetailedCourse data={data} handleApplyCourse={handleApplyCourse} /> : null;
};

export default DetailedCourseContainer;
