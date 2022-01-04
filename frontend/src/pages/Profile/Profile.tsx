import React from 'react';
import ListItem from '@mui/material/ListItem';

import { User } from 'types/user';
import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';

import {
  ProfileBox,
  UserInfoList,
  UserInfoText,
  UserInfoLabel,
  UserListSubheader,
  UserListItem,
} from './styled';

const ProfileContent: React.FC<User> = ({
  firstName,
  lastName,
  avatar,
  birthday,
  skype,
  position,
  skills,
  courses,
}) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileBox>
      <UserAvatar avatar={avatar} size="large" />
      <UserInfoList sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <ListItem disablePadding>
          <UserInfoLabel>Full name:</UserInfoLabel>
          <UserInfoText>
            {firstName} {lastName}
          </UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Birthday:</UserInfoLabel>
          <UserInfoText>{birthday}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Skype:</UserInfoLabel>
          <UserInfoText>{skype}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Position:</UserInfoLabel>
          <UserInfoText>{position}</UserInfoText>
        </ListItem>
      </UserInfoList>
      <UserInfoList subheader={<UserListSubheader>Skills</UserListSubheader>}>
        {skills?.map((skill, id) => (
          <ListItem key={id}>
            <UserListItem>{skill}</UserListItem>
          </ListItem>
        ))}
      </UserInfoList>
      <UserInfoList subheader={<UserListSubheader>Applied courses</UserListSubheader>}>
        {courses?.map((course, id: number) => (
          <ListItem key={id}>
            <UserListItem>{course}</UserListItem>
          </ListItem>
        ))}
      </UserInfoList>
    </ProfileBox>
  </AuthorizedLayout>
);

export default ProfileContent;
