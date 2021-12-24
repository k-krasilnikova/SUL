import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

const MyCourses: React.FC = () => (
  <AuthorizedLayout pageName="My Courses">
    <div>My Courses should be here</div>
  </AuthorizedLayout>
);

export default MyCourses;
