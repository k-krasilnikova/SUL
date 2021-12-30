import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import ListItem from 'components/ListItem';

const CoursesList: React.FC = () => (
  <AuthorizedLayout pageName="Courses List">
    <ListItem />
  </AuthorizedLayout>
);

export default CoursesList;
