import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PAGES } from 'constants/pages';
import { PATHS } from 'constants/routes';
import { backIconMobile } from 'icons';
import { IBackButton } from 'types/detailedCourse';

import { BackArrow, BackWrapper, StyledButton } from './styled';

const BackButton: FC<IBackButton> = ({ page }) => (
  <BackWrapper>
    <StyledButton
      variant="medium"
      color="primary"
      component={Link}
      to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}
    >
      {ButtonLabels.back}
    </StyledButton>
    <BackArrow alt="backIconMobile" src={backIconMobile} />
  </BackWrapper>
);

export default BackButton;
