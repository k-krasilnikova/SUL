import { FC } from 'react';

import { useToggle } from 'hooks';

import DeleteCourseButton from './DeleteCourseButton';

const DeleteCourseButtonContainer: FC = () => {
  const [isDeleteCourseButtonOpen, setDeleteCourseButtonOpen] = useToggle();

  return (
    <DeleteCourseButton
      isDeleteCourseButtonOpen={isDeleteCourseButtonOpen}
      toggleDeleteCourseButtonOpen={setDeleteCourseButtonOpen}
    />
  );
};

export default DeleteCourseButtonContainer;
