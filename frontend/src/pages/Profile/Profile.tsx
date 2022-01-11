import React from 'react';
import ListItem from '@mui/material/ListItem';

import { User } from 'types/user';
import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';

import UserCourses from './UserCourses/UserCourses';
import { ProfileBox, AvatarWrapper, UserInfoList, UserInfoText, UserInfoLabel } from './styled';

const ProfileContent: React.FC<User> = ({
  avatar,
  firstName,
  lastName,
  position,
  group,
  phone,
  skype,
  courses,
}) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileBox>
      <AvatarWrapper>
        <UserAvatar avatar={avatar} size="large" />
      </AvatarWrapper>
      <UserInfoList>
        <ListItem disablePadding>
          <UserInfoLabel>Name:</UserInfoLabel>
          <UserInfoText>{firstName}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Surname:</UserInfoLabel>
          <UserInfoText>{lastName}</UserInfoText>
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
    <UserCourses courses={courses} />
  </AuthorizedLayout>
);

export default ProfileContent;
