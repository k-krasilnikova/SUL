import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useGetEmployeeProfile } from 'api/employees';
import { EMPLOYEE_INFO } from 'constants/employeeInfo';

import EmployeeProfileContent from './EmployeeProfile';

const EmployeeProfile: React.FC = () => {
  const params = useParams();
  const { data } = useGetEmployeeProfile(params.employeeId);

  const [employeeInfo, setEmployeeInfo] = useState(EMPLOYEE_INFO.skills);
  const [hoveredButton, setHoveredButton] = useState<string | undefined>(undefined);
  const [profileInfoOpened, setProfileInfoOpened] = useState<boolean>(false);

  const toggleEmployeeInfo = (infoToOpen: string) => {
    setEmployeeInfo(infoToOpen);
  };

  const toggleHover = (buttonHovered: string): void => {
    setHoveredButton(buttonHovered === EMPLOYEE_INFO.none ? undefined : buttonHovered);
  };

  const toggleProfileInfoOpened = () => {
    setProfileInfoOpened(!profileInfoOpened);
  };

  const isSkillOpened =
    (employeeInfo === EMPLOYEE_INFO.skills && !hoveredButton) ||
    hoveredButton === EMPLOYEE_INFO.skills;
  const isCourseOpened =
    (employeeInfo === EMPLOYEE_INFO.allCourses && !hoveredButton) ||
    hoveredButton === EMPLOYEE_INFO.allCourses;

  return (
    <EmployeeProfileContent
      avatar={data?.avatar}
      firstName={data?.firstName}
      lastName={data?.lastName}
      position={data?.position}
      group={data?.group}
      phone={data?.phone}
      skype={data?.skype}
      technologies={data?.technologies}
      employeeCourses={data?.courses}
      employeeInfo={employeeInfo}
      toggleEmployeeInfo={toggleEmployeeInfo}
      toggleHover={toggleHover}
      profileInfoOpened={profileInfoOpened}
      toggleProfileInfoOpened={toggleProfileInfoOpened}
      isSkillOpened={isSkillOpened}
      isCourseOpened={isCourseOpened}
    />
  );
};

export default EmployeeProfile;
