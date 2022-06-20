import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PAGES } from 'constants/pages';
import { backIconMobile } from 'icons';
import { IBackButton } from 'pages/DetailedCourse/types';

import { BackArrow, BackWrapper, StyledButton } from './styled';

const BackButton: FC<IBackButton> = ({ coursesPath, myCoursesPath, page }) => (
  <BackWrapper>
    <StyledButton
      color="primary"
      variant="medium"
      component={Link}
      to={page === PAGES.coursesList ? coursesPath : myCoursesPath}
    >
      {ButtonLabels.back}
    </StyledButton>
    <Link to={page === PAGES.coursesList ? coursesPath : myCoursesPath}>
      <BackArrow alt="backIconMobile" src={backIconMobile} />
    </Link>
  </BackWrapper>
);

export default BackButton;
