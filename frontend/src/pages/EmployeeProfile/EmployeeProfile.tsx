import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

import { User } from 'types/user';
import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { PATHS } from 'constants/routes';

import {
  ProfileBox,
  AvatarWrapper,
  EmployeeName,
  UserInfoList,
  UserInfoText,
  UserInfoLabel,
  BackButton,
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
    <Link to={PATHS.employees}>
      <BackButton variant="medium" color="primary">
        Back
      </BackButton>
    </Link>
    <ProfileBox>
      <AvatarWrapper>
        <UserAvatar avatar={avatar} size={SIZE.medium} />
      </AvatarWrapper>
      <UserInfoList>
        <EmployeeName disablePadding>{`${firstName} ${lastName} `}</EmployeeName>
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
  </AuthorizedLayout>
);

export default ProfileContent;
