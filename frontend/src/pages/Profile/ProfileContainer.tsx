import React from 'react';

import useGetProfile from 'api/profile';

import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useGetProfile();
  return (
    <Profile
      firstName={data?.firstName}
      lastName={data?.lastName}
      avatarUrl={data?.avatar}
      userBirthday={data?.birthday}
      userSkype={data?.skype}
      userPosition={data?.position}
      userSkills={data?.skills}
      userCourses={data?.courses}
    />
  );
};

export default ProfileContainer;
