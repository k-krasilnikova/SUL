import React, { useState } from 'react';
import { useParams } from 'react-router';

import { EmployeeInfo } from 'enums/employee';
import { useGetEmployeeProfile } from 'api/manager';

import EmployeeProfile from './EmployeeProfile';

const EmployeeProfileContainer: React.FC = () => {
  const params = useParams();
  const { data: employeeResponse } = useGetEmployeeProfile(params.employeeId);

  const [employeeInfo, setEmployeeInfo] = useState(EmployeeInfo.skills);
  const [hoveredButton, setHoveredButton] = useState<string | undefined>(undefined);

  const toggleEmployeeInfo = (infoToOpen: EmployeeInfo) => {
    setEmployeeInfo(infoToOpen);
  };

  const toggleHover = (buttonHovered: string): void => {
    setHoveredButton(buttonHovered === EmployeeInfo.none ? undefined : buttonHovered);
  };

  const isSkillOpened =
    (employeeInfo === EmployeeInfo.skills && !hoveredButton) ||
    hoveredButton === EmployeeInfo.skills;
  const isCourseOpened =
    (employeeInfo === EmployeeInfo.allCourses && !hoveredButton) ||
    hoveredButton === EmployeeInfo.allCourses;

  return (
    <EmployeeProfile
      employee={employeeResponse}
      employeeCourses={employeeResponse?.courses}
      employeeInfo={employeeInfo}
      toggleEmployeeInfo={toggleEmployeeInfo}
      toggleHover={toggleHover}
      isSkillOpened={isSkillOpened}
      isCourseOpened={isCourseOpened}
    />
  );
};

export default EmployeeProfileContainer;
