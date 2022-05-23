import { FC } from 'react';

import PageTitle from 'components/PageTitle';
import UserProfile from 'components/UserProfile';
import { IProfileProps } from 'types/profile';

import UserSkills from './UserSkills';
import { ProfileWrapper } from './styled';

const Profile: FC<IProfileProps> = ({ user }) => (
  <PageTitle title="Profile">
    <ProfileWrapper>
      <UserProfile {...user} />
    </ProfileWrapper>
    <UserSkills technologies={user?.technologies} />
  </PageTitle>
);

export default Profile;
