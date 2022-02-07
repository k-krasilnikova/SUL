import React from 'react';

import { User } from 'types/user';
import { avatarDefault } from 'icons';

import { UserAvatarRounded } from './styled';

interface AvatarProps {
  size: string;
}
type Props = User & AvatarProps;

const UserAvatar: React.FC<Props> = ({ avatar, size }) => (
  <UserAvatarRounded name="my photo" src={avatar || avatarDefault} size={size} round unstyled />
);

export default UserAvatar;
