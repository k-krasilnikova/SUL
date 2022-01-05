import React from 'react';

import { useGetProfile } from 'api/profile';

import ProfileContent from './Profile';

const Profile: React.FC = () => {
  const { data } = useGetProfile();
  return (
    <ProfileContent
      firstName={data?.firstName}
      lastName={data?.lastName}
      avatar={data?.avatar}
      birthday={data?.birthday}
      skype={data?.skype}
      position={data?.position}
      skills={data?.skills}
      courses={data?.courses}
    />
  );
};

export default Profile;
