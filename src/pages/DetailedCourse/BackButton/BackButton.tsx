import React from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PAGES } from 'constants/pages';
import { PATHS } from 'constants/routes';
import { backIconMobile } from 'icons';
import { IBackButton } from 'types/detailedCourse';

import { BackArrow, BackLink, StyledButton } from './styled';

const BackButton: React.FC<IBackButton> = ({ page }) => (
  <BackLink to={page === PAGES.coursesList ? PATHS.coursesList : PATHS.myCourses}>
    <StyledButton variant="medium" color="primary">
      {ButtonLabels.back}
    </StyledButton>
    <BackArrow alt="backIconMobile" src={backIconMobile} />
  </BackLink>
);

export default BackButton;
