import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import DeleteCourseDialog from './DeleteCourseDialog';
import { StyledButton } from './styled';
import { IDeleteCourseButtonProps } from './types';

const DeleteCourseButton: FC<IDeleteCourseButtonProps> = ({
  isDeleteCourseButtonOpen,
  toggleDeleteCourseButtonOpen,
}) => (
  <>
    <StyledButton color="primary" variant="mediumOutlined" onClick={toggleDeleteCourseButtonOpen}>
      {ButtonLabels.deleteCourse}
    </StyledButton>
    <DeleteCourseDialog
      isOpened={isDeleteCourseButtonOpen}
      handleDialogClose={toggleDeleteCourseButtonOpen}
    />
  </>
);

export default DeleteCourseButton;
