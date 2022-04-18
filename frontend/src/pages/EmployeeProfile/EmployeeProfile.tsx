import React from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { IEmployeeProfile } from 'types/employee';

import { BackButton, EmployeeProfileWrapper } from './styled';
import EmployeeInfo from './EmployeeInfo';
import EmployeeSkillsAndCourses from './EmployeeSkillsAndCourses';

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
  refetchEmployeeProfile,
}) => (
  <AuthorizedLayout pageName="Employee">
    <EmployeeProfileWrapper>
      <BackButton component={Link} to={PATHS.employees} variant="medium" color="primary">
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
        refetchEmployeeProfile={refetchEmployeeProfile}
        isSkillOpened={isSkillOpened}
        isCourseOpened={isCourseOpened}
      />
    </EmployeeProfileWrapper>
  </AuthorizedLayout>
);

export default EmployeeProfile;
