import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

const Profile: React.FC = () => (
  <AuthorizedLayout pageName="Profile">
    <div>Profile should be here</div>
  </AuthorizedLayout>
);

export default Profile;
