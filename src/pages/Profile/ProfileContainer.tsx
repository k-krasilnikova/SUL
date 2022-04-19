import React from 'react';

import { useGetProfile } from 'api/profile';

import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const { data: userProfile } = useGetProfile();

  return <Profile user={userProfile} />;
};

export default ProfileContainer;
