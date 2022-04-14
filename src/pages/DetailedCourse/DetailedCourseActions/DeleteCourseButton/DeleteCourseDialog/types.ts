export interface IDeleteCourseDialogContainerProps {
  isOpened: boolean;
  handleDialogClose: () => void;
}

export interface IDeleteCourseDialogProps extends IDeleteCourseDialogContainerProps {
  isDeleteCourseLoading: boolean;
  handleDeleteCourse: () => void;
}
