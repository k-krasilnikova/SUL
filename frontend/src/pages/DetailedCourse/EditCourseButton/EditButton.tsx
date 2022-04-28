import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { StyledButton } from './styled';

interface IEditButton {
  id: string;
}

const EditButton: FC<IEditButton> = ({ id }) => (
  <StyledButton
    color="primary"
    variant="medium"
    component={Link}
    to={transformRoute(PATHS.courseEditor, id)}
  >
    {ButtonLabels.edit}
  </StyledButton>
);

export default EditButton;
