import React from 'react';
import { useParams } from 'react-router';

import useGetCourseInfo from 'api/courses/getCourseInfo';
import useApplyCourse from 'api/courses/applyCourse';

import DetailedCourse from './DetailedCourse';

const DetailedCourseContainer: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params.courseId);
  const { mutate } = useApplyCourse();
  const handleApplyCourse = () => {
    mutate(params.courseId);
  };

  const TEXT_LIMIT = 400;

  return data ? (
    <DetailedCourse
      data={data}
      handleApplyCourse={handleApplyCourse}
      descriptionLimit={TEXT_LIMIT}
    />
  ) : null;
};

export default DetailedCourseContainer;
