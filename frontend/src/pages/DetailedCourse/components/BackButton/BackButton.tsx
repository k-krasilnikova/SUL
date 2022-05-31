import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PAGES } from 'constants/pages';
import { PATHS } from 'constants/routes';
import { backIconMobile } from 'icons';

import { BackArrow, BackWrapper, StyledButton } from './styled';
import { IBackButton } from '../../types';

const BackButton: FC<IBackButton> = ({ page }) => (
  <BackWrapper>
    <StyledButton
      color="primary"
      variant="medium"
      component={Link}
      to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}
    >
      {ButtonLabels.back}
    </StyledButton>
    <Link to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}>
      <BackArrow alt="backIconMobile" src={backIconMobile} />
    </Link>
  </BackWrapper>
);

export default BackButton;
