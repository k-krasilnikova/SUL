import React from 'react';
import ListItem from '@mui/material/ListItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { User } from 'types/user';
import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';
import { SKILLS } from 'constants/skills';
import { SIZE } from 'constants/sizes';

import { UserSkills } from './UserSkills';
import {
  ProfileBox,
  AvatarWrapper,
  UserInfoList,
  UserInfoText,
  UserInfoLabel,
  CopyIcon,
} from './styled';

const ProfileContent: React.FC<User> = ({
  avatar,
  firstName,
  lastName,
  position,
  group,
  phone,
  skype,
}) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileBox>
      <AvatarWrapper>
        <UserAvatar avatar={avatar} size={SIZE.large} />
      </AvatarWrapper>
      <UserInfoList>
        <ListItem disablePadding>
          <UserInfoLabel>Name:</UserInfoLabel>
          <UserInfoText>
            {`${firstName} ${lastName} `}
            <CopyToClipboard text={`${firstName} ${lastName}`}>
              <CopyIcon color="disabled" />
            </CopyToClipboard>
          </UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Position:</UserInfoLabel>
          <UserInfoText>{position}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Group:</UserInfoLabel>
          <UserInfoText>{group}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Phone:</UserInfoLabel>
          <UserInfoText>{phone}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Skype:</UserInfoLabel>
          <UserInfoText>{skype}</UserInfoText>
        </ListItem>
      </UserInfoList>
    </ProfileBox>
    <UserSkills skills={SKILLS} />
  </AuthorizedLayout>
);

export default ProfileContent;
