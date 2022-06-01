import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { IAddCourseButtonProps } from 'pages/EmployeeProfile/types';

import { AddCourseDialog } from './AddCourseDialog';
import { StyledButton } from './styled';

const AddCourseButton: FC<IAddCourseButtonProps> = ({
  isAddCourseDialogOpen,
  toggleAddCourseDiaologOpen,
}) => (
  <>
    <StyledButton variant="medium" onClick={toggleAddCourseDiaologOpen}>
      {ButtonLabels.addCourse}
    </StyledButton>
    <AddCourseDialog isOpened={isAddCourseDialogOpen} handleClose={toggleAddCourseDiaologOpen} />
  </>
);

export default AddCourseButton;
