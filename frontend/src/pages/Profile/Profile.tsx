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

const Profile: React.FC<User> = ({
  userName,
  avatarUrl,
  userBirthday,
  userSkype,
  userPosition,
  userSkills,
  userCourses,
}) => (
  <AuthorizedLayout pageName="Profile">
    <ProfileBox>
      <UserAvatar avatarUrl={avatarUrl} size="large" />
      <UserInfoList sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <ListItem disablePadding>
          <UserInfoLabel>Full name:</UserInfoLabel>
          <UserInfoText>{userName}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Birthday:</UserInfoLabel>
          <UserInfoText>{userBirthday}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Skype:</UserInfoLabel>
          <UserInfoText>{userSkype}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>Position:</UserInfoLabel>
          <UserInfoText>{userPosition}</UserInfoText>
        </ListItem>
      </UserInfoList>
      <UserInfoList subheader={<UserListSubheader>Skills</UserListSubheader>}>
        {userSkills?.map((skill, id) => (
          <ListItem key={id}>
            <UserListItem>{skill}</UserListItem>
          </ListItem>
        ))}
      </UserInfoList>
      <UserInfoList subheader={<UserListSubheader>Applied courses</UserListSubheader>}>
        {userCourses?.map((course, id) => (
          <ListItem key={id}>
            <UserListItem>{course}</UserListItem>
          </ListItem>
        ))}
      </UserInfoList>
    </ProfileBox>
  </AuthorizedLayout>
);

export default Profile;
