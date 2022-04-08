import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Avatar from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { IProfile } from 'types/profile';

import { UserSkills } from './UserSkills';
import { ProfileBox, AvatarWrapper } from './styled';
import UserInfo from './UserInfo';

const Profile: React.FC<IProfile> = ({ user }) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileBox>
      <AvatarWrapper>
        <Avatar avatar={user?.avatar} size={SIZE.large} />
      </AvatarWrapper>
      <UserInfo user={user} />
    </ProfileBox>
    <UserSkills technologies={user?.technologies} />
  </AuthorizedLayout>
);

export default Profile;
