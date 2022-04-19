import React from 'react';

import { IUser } from 'types/user';
import { avatarDefault } from 'icons';
import { TSizeVariants } from 'types/size';

import { UserAvatarRounded } from './styled';

interface AvatarProps {
  size: TSizeVariants;
}

type Props = IUser & AvatarProps;

const Avatar: React.FC<Props> = ({ avatar, size }) => (
  <UserAvatarRounded size={size} avatar={avatar || avatarDefault} />
);

export default Avatar;
