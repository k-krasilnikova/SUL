import React from 'react';
import ListItem from '@mui/material/ListItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { PROFILE_LABELS } from 'constants/profile';
import { IProfile } from 'types/profile';

import { CopyIcon, UserInfoLabel, UserInfoList, UserInfoText } from './styled';

const UserInfo: React.FC<IProfile> = ({ user }) => (
  <UserInfoList>
    <ListItem disablePadding>
      <UserInfoLabel>{PROFILE_LABELS.name}</UserInfoLabel>
      <UserInfoText>
        {`${user?.firstName} ${user?.lastName} `}
        <CopyToClipboard text={`${user?.firstName} ${user?.lastName}`}>
          <CopyIcon color="disabled" />
        </CopyToClipboard>
      </UserInfoText>
    </ListItem>
    <ListItem disablePadding>
      <UserInfoLabel>{PROFILE_LABELS.position}</UserInfoLabel>
      <UserInfoText>{user?.position}</UserInfoText>
    </ListItem>
    <ListItem disablePadding>
      <UserInfoLabel>{PROFILE_LABELS.group}</UserInfoLabel>
      <UserInfoText>{user?.group}</UserInfoText>
    </ListItem>
    <ListItem disablePadding>
      <UserInfoLabel>{PROFILE_LABELS.phone}</UserInfoLabel>
      <UserInfoText>{user?.phone}</UserInfoText>
    </ListItem>
    <ListItem disablePadding>
      <UserInfoLabel>{PROFILE_LABELS.skype}</UserInfoLabel>
      <UserInfoText>{user?.skype}</UserInfoText>
    </ListItem>
  </UserInfoList>
);

export default UserInfo;
