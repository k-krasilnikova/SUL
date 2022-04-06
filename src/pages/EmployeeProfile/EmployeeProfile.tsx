import React from 'react';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';
import { ButtonLabels } from 'components/Button/ButtonsEnums';
import { SIZE } from 'constants/sizes';
import { PATHS } from 'constants/routes';
import { EMPLOYEE_INFO } from 'constants/employeeInfo';
import { UserSkills } from 'pages/Profile/UserSkills';
import { IEmployeeProfile } from 'types/employee';

import { AddCourseButton } from './AddCourseButton';
import { EmployeeCourses } from './EmployeeCourses';
import {
  ProfileBox,
  AvatarWrapper,
  EmployeeName,
  UserInfoList,
  UserInfoText,
  UserInfoLabel,
  BackButton,
  SkillsAndCoursesBox,
  EmployeeButtonGroup,
  SkillsAndCoursesButton,
  UserSkillsWrapper,
  UserInfoListItems,
  ExpandMoreIcon,
  ExpandLessIcon,
  MobileIconWrapper,
  EmployeeProfileWrapper,
  StackItem,
  EmployeeInfoItem,
} from './styled';

const EmployeeProfile: React.FC<IEmployeeProfile> = ({
  employee,
  employeeCourses,
  employeeInfo,
  toggleEmployeeInfo,
  toggleHover,
  profileInfoOpened,
  toggleProfileInfoOpened,
  isSkillOpened,
  isCourseOpened,
}) => (
  <AuthorizedLayout pageName="Employee">
    <EmployeeProfileWrapper>
      <BackButton component={Link} to={PATHS.employees} variant="medium" color="primary">
        {ButtonLabels.back}
      </BackButton>
      <ProfileBox>
        <AvatarWrapper>
          <UserAvatar avatar={employee?.avatar} size={SIZE.xlarge} />
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
              <UserInfoLabel>Position:</UserInfoLabel>
              <UserInfoText>{employee?.position}</UserInfoText>
            </ListItem>
            <EmployeeInfoItem disablePadding>
              <UserInfoLabel>Stack:</UserInfoLabel>
              <UserInfoText>
                {employee?.stack.map((stackItem) => (
                  <StackItem key={stackItem.name}>{stackItem.name}</StackItem>
                ))}
              </UserInfoText>
            </EmployeeInfoItem>
            <ListItem disablePadding>
              <UserInfoLabel>Group:</UserInfoLabel>
              <UserInfoText>{employee?.group}</UserInfoText>
            </ListItem>
            <ListItem disablePadding>
              <UserInfoLabel>Phone:</UserInfoLabel>
              <UserInfoText>{employee?.phone}</UserInfoText>
            </ListItem>
            <ListItem disablePadding>
              <UserInfoLabel>Skype:</UserInfoLabel>
              <UserInfoText>{employee?.skype}</UserInfoText>
            </ListItem>
          </UserInfoListItems>
        </UserInfoList>
      </ProfileBox>
      <SkillsAndCoursesBox>
        <EmployeeButtonGroup variant="contained">
          <SkillsAndCoursesButton
            isOpened={isSkillOpened}
            onClick={() => toggleEmployeeInfo(EMPLOYEE_INFO.skills)}
            onMouseEnter={() => toggleHover(EMPLOYEE_INFO.skills)}
            onMouseLeave={() => toggleHover(EMPLOYEE_INFO.none)}
          >
            {ButtonLabels.skills}
          </SkillsAndCoursesButton>
          <SkillsAndCoursesButton
            isOpened={isCourseOpened}
            onClick={() => toggleEmployeeInfo(EMPLOYEE_INFO.allCourses)}
            onMouseEnter={() => toggleHover(EMPLOYEE_INFO.allCourses)}
            onMouseLeave={() => toggleHover(EMPLOYEE_INFO.none)}
          >
            {ButtonLabels.allCourses}
          </SkillsAndCoursesButton>
        </EmployeeButtonGroup>
        <AddCourseButton />
      </SkillsAndCoursesBox>
      <UserSkillsWrapper>
        {employeeInfo === EMPLOYEE_INFO.skills ? (
          <UserSkills technologies={employee?.technologies} />
        ) : (
          <EmployeeCourses courses={employeeCourses} />
        )}
      </UserSkillsWrapper>
    </EmployeeProfileWrapper>
  </AuthorizedLayout>
);

export default EmployeeProfile;
