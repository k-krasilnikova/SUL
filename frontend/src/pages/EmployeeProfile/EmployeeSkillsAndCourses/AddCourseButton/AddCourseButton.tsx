import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import { AddCourseDialog } from './AddCourseDialog';
import { StyledButton } from './styled';

interface IProps {
  isAddCourseDialogOpen: boolean;
  toggleAddCourseDiaologOpen: () => void;
  refetchEmployeeProfile: () => void;
}

const AddCourseButton: FC<IProps> = ({
  isAddCourseDialogOpen,
  toggleAddCourseDiaologOpen,
  refetchEmployeeProfile,
}) => (
  <>
    <StyledButton variant="medium" onClick={toggleAddCourseDiaologOpen}>
      {ButtonLabels.addCourse}
    </StyledButton>
    <AddCourseDialog
      isOpened={isAddCourseDialogOpen}
      handleClose={toggleAddCourseDiaologOpen}
      refetchEmployeeProfile={refetchEmployeeProfile}
    />
  </>
);

export default AddCourseButton;
