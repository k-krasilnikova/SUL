import React from 'react';

import { IUser } from 'types/user';
import { avatarDefault } from 'icons';
import { TSizeVariants } from 'types/size';

import { UserAvatarRounded } from './styled';

interface IAvatarProps {
  size: TSizeVariants;
  avatar: IUser['avatar'];
}

const Avatar: React.FC<IAvatarProps> = ({ avatar, size }) => (
  <UserAvatarRounded size={size} avatar={avatar || avatarDefault} />
);

export default Avatar;
