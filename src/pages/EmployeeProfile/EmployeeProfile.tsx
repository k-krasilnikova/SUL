import React from 'react';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { User } from 'types/user';
import { AuthorizedLayout } from 'components/Layout';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { PATHS } from 'constants/routes';
import { EMPLOYEE_INFO } from 'constants/employeeInfo';
import { UserSkills } from 'pages/Profile/UserSkills';
import { ClientCourse } from 'types/clientCourse';

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
  AddCourseButton,
  UserSkillsWrapper,
} from './styled';

interface Props {
  employeeCourses?: ClientCourse[];
  employeeInfo: string;
  toggleEmployeeInfo: (infoToOpen: string) => void;
  hoveredButton: string | undefined;
  toggleHover: (buttonHovered: string) => void;
}

type Employee = User & Props;

const ProfileContent: React.FC<Employee> = ({
  avatar,
  firstName,
  lastName,
  position,
  group,
  phone,
  skype,
  technologies,
  employeeCourses,
  employeeInfo,
  toggleEmployeeInfo,
  hoveredButton,
  toggleHover,
}) => (
  <AuthorizedLayout pageName="Employee">
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
    <SkillsAndCoursesBox>
      <EmployeeButtonGroup variant="contained">
        <SkillsAndCoursesButton
          isOpened={
            (employeeInfo === EMPLOYEE_INFO.skills && !hoveredButton) ||
            hoveredButton === EMPLOYEE_INFO.skills
          }
          onClick={() => toggleEmployeeInfo(EMPLOYEE_INFO.skills)}
          onMouseEnter={() => toggleHover(EMPLOYEE_INFO.skills)}
          onMouseLeave={() => toggleHover(EMPLOYEE_INFO.none)}
        >
          Skills
        </SkillsAndCoursesButton>
        <SkillsAndCoursesButton
          isOpened={
            (employeeInfo === EMPLOYEE_INFO.allCourses && !hoveredButton) ||
            hoveredButton === EMPLOYEE_INFO.allCourses
          }
          onClick={() => toggleEmployeeInfo(EMPLOYEE_INFO.allCourses)}
          onMouseEnter={() => toggleHover(EMPLOYEE_INFO.allCourses)}
          onMouseLeave={() => toggleHover(EMPLOYEE_INFO.none)}
        >
          All courses
        </SkillsAndCoursesButton>
      </EmployeeButtonGroup>
      <AddCourseButton variant="medium" color="primary">
        + Add Course
      </AddCourseButton>
    </SkillsAndCoursesBox>
    <UserSkillsWrapper>
      {employeeInfo === EMPLOYEE_INFO.skills ? (
        <UserSkills technologies={technologies} />
      ) : (
        <EmployeeCourses courses={employeeCourses} />
      )}
    </UserSkillsWrapper>
  </AuthorizedLayout>
);

export default ProfileContent;
