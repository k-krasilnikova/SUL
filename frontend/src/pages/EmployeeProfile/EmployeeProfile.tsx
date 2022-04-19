import React from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';

import { BackButton, EmployeeProfileWrapper } from './styled';
import EmployeeInfo from './EmployeeInfo';
import EmployeeSkillsAndCourses from './EmployeeSkillsAndCourses';
import { IEmployeeProfile } from './types';

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
      <BackButton color="primary" variant="medium" component={Link} to={PATHS.employees}>
        {ButtonLabels.back}
      </BackButton>
      <EmployeeInfo
        employee={employee}
        profileInfoOpened={profileInfoOpened}
        toggleProfileInfoOpened={toggleProfileInfoOpened}
      />
      <EmployeeSkillsAndCourses
        employee={employee}
        employeeCourses={employeeCourses}
        employeeInfo={employeeInfo}
        toggleEmployeeInfo={toggleEmployeeInfo}
        toggleHover={toggleHover}
        isSkillOpened={isSkillOpened}
        isCourseOpened={isCourseOpened}
      />
    </EmployeeProfileWrapper>
  </AuthorizedLayout>
);

export default EmployeeProfile;
