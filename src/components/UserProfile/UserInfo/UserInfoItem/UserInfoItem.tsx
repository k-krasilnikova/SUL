import { FC } from 'react';

import { USER_INFO_LABEL } from 'constants/userInfo';
import { IUserInfoItemProps, IUserStackInfo } from 'components/UserProfile/types';

import { UserInfo, UserInfoLabel, UserInfoText, StackItem } from './styled';

const UserInfoItem: FC<IUserInfoItemProps> = ({ infoLabel, infoText }) => {
  const isStackInfo =
    USER_INFO_LABEL[infoLabel]?.label === USER_INFO_LABEL.stack.label && infoText instanceof Array;

  return (
    <UserInfo disablePadding>
      <UserInfoLabel>{USER_INFO_LABEL[infoLabel]?.label}</UserInfoLabel>
      <UserInfoText>
        {isStackInfo
          ? infoText?.map(({ member }: IUserStackInfo) => (
              <StackItem key={member.name}>{member.name}</StackItem>
            ))
          : infoText}
      </UserInfoText>
    </UserInfo>
  );
};

export default UserInfoItem;
