import { Link } from 'react-router-dom';

import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';

import { AddButton, AddButtonWrapper } from './styled';

const AddCourseButton: React.FC = () => (
  <AddButtonWrapper>
    <Link to={PATHS.coursesList}>
      <AddButton disableElevation variant="mediumContained">
        {ButtonLabels.addWithPlus}
      </AddButton>
    </Link>
  </AddButtonWrapper>
);

export default AddCourseButton;
