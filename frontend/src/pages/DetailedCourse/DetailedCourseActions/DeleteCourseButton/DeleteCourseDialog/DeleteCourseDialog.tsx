import { FC } from 'react';

import { CONFIRM_DELETE_COURSE } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ConfirmDialog } from 'components/Dialogs';

import { IDeleteCourseDialogProps } from './types';

const DeleteCourseDialog: FC<IDeleteCourseDialogProps> = ({
  isOpened,
  isDeleteCourseLoading,
  handleDialogClose,
  handleDeleteCourse,
}) => (
  <ConfirmDialog
    open={isOpened}
    confirmMessage={CONFIRM_DELETE_COURSE}
    declineButtonLabel={ButtonLabels.cancel}
    confirmButtonLabel={ButtonLabels.deleteCourse}
    isLoading={isDeleteCourseLoading}
    handleConfirm={handleDeleteCourse}
    handleDecline={handleDialogClose}
    onClose={handleDialogClose}
  />
);

export default DeleteCourseDialog;
