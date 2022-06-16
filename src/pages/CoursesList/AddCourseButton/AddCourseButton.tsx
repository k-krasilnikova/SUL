import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';

import { AddButton, AddButtonWrapper } from './styled';

const AddCourseButton: FC = () => (
  <AddButtonWrapper>
    <AddButton color="primary" variant="mediumContained" component={Link} to={PATHS.courseCreator}>
      {ButtonLabels.addWithPlus}
    </AddButton>
  </AddButtonWrapper>
);

export default AddCourseButton;
