import React from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { EMPLOYEE_INFO } from 'constants/employeeInfo';
import { UserSkills } from 'pages/Profile/UserSkills';
import { IEmployeeSkillsAndCourses } from 'types/employee';

import { AddCourseButton } from './AddCourseButton';
import { EmployeeCourses } from './EmployeeCourses';
import {
  EmployeeButtonGroup,
  SkillsAndCoursesBox,
  SkillsAndCoursesButton,
  UserSkillsWrapper,
} from './styled';

const EmployeeSkillsAndCourses: React.FC<IEmployeeSkillsAndCourses> = ({
  employee,
  employeeCourses,
  employeeInfo,
  toggleEmployeeInfo,
  toggleHover,
  refetchEmployeeProfile,
  isSkillOpened,
  isCourseOpened,
}) => (
  <>
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
      <AddCourseButton refetchEmployeeProfile={refetchEmployeeProfile} />
    </SkillsAndCoursesBox>
    <UserSkillsWrapper>
      {employeeInfo === EMPLOYEE_INFO.skills ? (
        <UserSkills technologies={employee?.technologies} />
      ) : (
        <EmployeeCourses courses={employeeCourses} />
      )}
    </UserSkillsWrapper>
  </>
);

export default EmployeeSkillsAndCourses;
