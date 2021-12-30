import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

const CoursesList: React.FC = () => (
  <AuthorizedLayout pageName="Courses List">
    <div>Should be Courses List</div>
  </AuthorizedLayout>
);

export default CoursesList;
