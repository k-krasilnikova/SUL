import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';

import { AddButton, AddButtonWrapper } from './styled';

const AddCourseButton: React.FC = () => (
  <AddButtonWrapper>
    <AddButton
      variant="mediumContained"
      component={Link}
      to={PATHS.coursesList}
      color="primary"
      disableElevation
    >
      {ButtonLabels.addWithPlus}
    </AddButton>
  </AddButtonWrapper>
);

export default AddCourseButton;
