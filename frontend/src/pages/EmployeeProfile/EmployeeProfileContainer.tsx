import React from 'react';
import { useParams } from 'react-router';

import { useGetEmployeeProfile } from 'api/employees';

import ProfileContent from './EmployeeProfile';

const EmployeeProfile: React.FC = () => {
  const params = useParams();
  const { data } = useGetEmployeeProfile(params.employeeId);
  return (
    <ProfileContent
      avatar={data?.avatar}
      firstName={data?.firstName}
      lastName={data?.lastName}
      position={data?.position}
      group={data?.group}
      phone={data?.phone}
      skype={data?.skype}
    />
  );
};

export default EmployeeProfile;
