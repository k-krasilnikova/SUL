import React from 'react';

import { User } from 'types/user';
import { avatarDefault } from 'icons';

import { UserAvatarRounded } from './styled';

interface AvatarProps {
  size?: string;
}
const SIZES = {
  small: 'small',
  large: 'large',
};
type Props = User & AvatarProps;

const UserAvatar: React.FC<Props> = ({ avatarUrl, size }) => (
  <UserAvatarRounded
    alt="my photo"
    src={avatarUrl || avatarDefault}
    sx={size === SIZES.small ? { width: 40, height: 40 } : { width: 100, height: 100 }}
  />
);

export default UserAvatar;
