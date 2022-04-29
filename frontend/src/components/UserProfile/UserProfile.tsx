import { FC } from 'react';

import { IUserInfoProps } from './types';
import { ContentWrapper } from './styled';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

export const UserProfile: FC<IUserInfoProps> = ({ avatar, ...userInfo }) => (
  <ContentWrapper>
    <UserAvatar avatar={avatar} />
    <UserInfo avatar={avatar} {...userInfo} />
  </ContentWrapper>
);

export default UserProfile;
