import React from 'react';

import { useGetProfile } from 'api/profile';

import ProfileContent from './Profile';

const Profile: React.FC = () => {
  const { data } = useGetProfile();
  return (
    <ProfileContent
      avatar={data?.avatar}
      firstName={data?.firstName}
      lastName={data?.lastName}
      position={data?.position}
      group={data?.group}
      phone={data?.phone}
      skype={data?.skype}
      courses={data?.courses}
    />
  );
};

export default Profile;
