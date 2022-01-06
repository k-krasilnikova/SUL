import React from 'react';

import { useGetCourses } from 'api/courses';

import { AuthorizedLayout } from 'components/Layout';

const CoursesList: React.FC = () => {
  const { data } = useGetCourses();
  console.log(`data`, data);
  return (
    <AuthorizedLayout pageName="Courses List">
      <div>Courses List should be here</div>
    </AuthorizedLayout>
  );
};

export default CoursesList;
