import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { StyledButton } from './styled';
import { IEditCourseButton } from '../types';

const EditCourseButton: FC<IEditCourseButton> = ({ id }) => (
  <StyledButton
    color="primary"
    variant="medium"
    component={Link}
    to={transformRoute(PATHS.courseEditor, id)}
  >
    {ButtonLabels.edit}
  </StyledButton>
);

export default EditCourseButton;
