import { FC } from 'react';

import Avatar from 'components/Avatar';
import { IUserAvatarProps } from 'components/UserProfile/types';
import { Size } from 'enums/sizes';

import { AvatarWrapper } from './styled';

export const UserAvatar: FC<IUserAvatarProps> = ({ avatar, isFromAccordion }) => (
  <AvatarWrapper visible={isFromAccordion}>
    <Avatar avatar={avatar} size={Size.sublarge} />
  </AvatarWrapper>
);

export default UserAvatar;
