import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { PATHS } from 'constants/routes';

import { LearningPageContainer, BackButton, LearningWrapper } from './styled';

interface IProps {
  children: ReactNode;
}

const LearningCourse: FC<IProps> = ({ children }) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <Link to={PATHS.myCourses}>
        <BackButton disableElevation variant="contained">
          Back
        </BackButton>
      </Link>
      <LearningWrapper>{children}</LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
