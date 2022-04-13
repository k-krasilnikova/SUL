import React from 'react';
import { ListItem } from '@mui/material';

import Avatar from 'components/Avatar';
import { EMPLOYEE_INFO_LABEL } from 'constants/employeeInfo';
import { SIZE } from 'constants/sizes';
import { IEmployeeInfo } from 'types/employee';

import {
  AvatarWrapper,
  EmployeeInfoItem,
  EmployeeName,
  ExpandLessIcon,
  ExpandMoreIcon,
  MobileIconWrapper,
  ProfileBox,
  StackItem,
  UserInfoLabel,
  UserInfoList,
  UserInfoListItems,
  UserInfoText,
} from './styled';

const EmployeeInfo: React.FC<IEmployeeInfo> = ({
  employee,
  profileInfoOpened,
  toggleProfileInfoOpened,
}) => (
  <ProfileBox>
    <AvatarWrapper>
      <Avatar avatar={employee?.avatar} size={SIZE.xlarge} />
    </AvatarWrapper>
    <UserInfoList>
      <EmployeeName disablePadding>
        {employee?.firstName} {employee?.lastName}
        <MobileIconWrapper>
          {profileInfoOpened ? (
            <ExpandLessIcon onClick={toggleProfileInfoOpened} />
          ) : (
            <ExpandMoreIcon onClick={toggleProfileInfoOpened} />
          )}
        </MobileIconWrapper>
      </EmployeeName>
      <UserInfoListItems displayInfo={profileInfoOpened}>
        <ListItem disablePadding>
          <UserInfoLabel>{EMPLOYEE_INFO_LABEL.position}</UserInfoLabel>
          <UserInfoText>{employee?.position}</UserInfoText>
        </ListItem>
        <EmployeeInfoItem disablePadding>
          <UserInfoLabel>{EMPLOYEE_INFO_LABEL.stack}</UserInfoLabel>
          <UserInfoText>
            {employee?.stack.map((stackItem) => (
              <StackItem key={stackItem.name}>{stackItem.name}</StackItem>
            ))}
          </UserInfoText>
        </EmployeeInfoItem>
        <ListItem disablePadding>
          <UserInfoLabel>{EMPLOYEE_INFO_LABEL.group}</UserInfoLabel>
          <UserInfoText>{employee?.group}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>{EMPLOYEE_INFO_LABEL.phone}</UserInfoLabel>
          <UserInfoText>{employee?.phone}</UserInfoText>
        </ListItem>
        <ListItem disablePadding>
          <UserInfoLabel>{EMPLOYEE_INFO_LABEL.skype}</UserInfoLabel>
          <UserInfoText>{employee?.skype}</UserInfoText>
        </ListItem>
      </UserInfoListItems>
    </UserInfoList>
  </ProfileBox>
);

export default EmployeeInfo;
