import { FC } from 'react';
import { useParams } from 'react-router';

import { useDeleteCourse } from 'api/courses';

import DeleteCourseDialog from './DeleteCourseDialog';
import { IDeleteCourseDialogContainerProps } from './types';

const DeleteCourseDialogContainer: FC<IDeleteCourseDialogContainerProps> = (props) => {
  const { courseId } = useParams();

  const { mutate: deleteCourseMutate, isLoading: isDeleteCourseLoading } = useDeleteCourse();

  const handleDeleteCourse = () => {
    deleteCourseMutate(courseId);
  };

  return (
    <DeleteCourseDialog
      isDeleteCourseLoading={isDeleteCourseLoading}
      handleDeleteCourse={handleDeleteCourse}
      {...props}
    />
  );
};

export default DeleteCourseDialogContainer;
