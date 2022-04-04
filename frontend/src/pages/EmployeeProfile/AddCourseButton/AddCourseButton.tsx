import { FC } from 'react';

import { ButtonLabels } from 'components/Button/ButtonsEnums';

import { AddCourseDialog } from './AddCourseDialog';
import { StyledButton } from './styled';

interface IProps {
  isAddCourseDialogOpen: boolean;
  toggleAddCourseDiaologOpen: () => void;
}

const AddCourseButton: FC<IProps> = ({ isAddCourseDialogOpen, toggleAddCourseDiaologOpen }) => (
  <>
    <StyledButton variant="medium" onClick={toggleAddCourseDiaologOpen}>
      {ButtonLabels.addCourse}
    </StyledButton>
    <AddCourseDialog isOpened={isAddCourseDialogOpen} handleClose={toggleAddCourseDiaologOpen} />
  </>
);

export default AddCourseButton;
