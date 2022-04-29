import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { AuthorizedLayout } from 'components/Layout';
import UserProfile from 'components/UserProfile';

import { BackButton, EmployeeWrapper, ProfileWrapper } from './styled';
import EmployeeSkillsAndCourses from './EmployeeSkillsAndCourses';
import { IEmployeeProfileProps } from './types';

const EmployeeProfile: FC<IEmployeeProfileProps> = ({ employee, ...props }) => (
  <AuthorizedLayout pageName="Employee">
    <EmployeeWrapper>
      <BackButton color="primary" variant="medium" component={Link} to={PATHS.employees}>
        {ButtonLabels.back}
      </BackButton>
      <ProfileWrapper>
        <UserProfile {...employee} />
      </ProfileWrapper>
      <EmployeeSkillsAndCourses employee={employee} {...props} />
    </EmployeeWrapper>
  </AuthorizedLayout>
);

export default EmployeeProfile;
