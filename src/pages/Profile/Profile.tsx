import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import UserProfile from 'components/UserProfile';
import { IProfileProps } from 'types/profile';

import { UserSkills } from './UserSkills';
import { ProfileWrapper } from './styled';

const Profile: FC<IProfileProps> = ({ user }) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileWrapper>
      <UserProfile {...user} />
    </ProfileWrapper>
    <UserSkills technologies={user?.technologies} />
  </AuthorizedLayout>
);

export default Profile;
