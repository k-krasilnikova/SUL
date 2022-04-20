import React from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { UserSkills } from 'pages/Profile/UserSkills';
import { IEmployeeSkillsAndCourses } from 'types/employee';
import { EmployeeInfo } from 'enums/employee';

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
  isSkillOpened,
  isCourseOpened,
}) => (
  <>
    <SkillsAndCoursesBox>
      <EmployeeButtonGroup variant="contained">
        <SkillsAndCoursesButton
          isOpened={isSkillOpened}
          onClick={() => toggleEmployeeInfo(EmployeeInfo.skills)}
          onMouseEnter={() => toggleHover(EmployeeInfo.skills)}
          onMouseLeave={() => toggleHover(EmployeeInfo.none)}
        >
          {ButtonLabels.skills}
        </SkillsAndCoursesButton>
        <SkillsAndCoursesButton
          isOpened={isCourseOpened}
          onClick={() => toggleEmployeeInfo(EmployeeInfo.allCourses)}
          onMouseEnter={() => toggleHover(EmployeeInfo.allCourses)}
          onMouseLeave={() => toggleHover(EmployeeInfo.none)}
        >
          {ButtonLabels.allCourses}
        </SkillsAndCoursesButton>
      </EmployeeButtonGroup>
      <AddCourseButton />
    </SkillsAndCoursesBox>
    <UserSkillsWrapper>
      {employeeInfo === EmployeeInfo.skills ? (
        <UserSkills technologies={employee?.technologies} />
      ) : (
        <EmployeeCourses courses={employeeCourses} />
      )}
    </UserSkillsWrapper>
  </>
);

export default EmployeeSkillsAndCourses;
