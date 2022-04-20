import { FC } from 'react';

import { useToggle } from 'hooks';

import AddCourseButton from './AddCourseButton';

const AddCourseButtonContainer: FC = () => {
  const [isAddCourseDialogOpen, setAddCourseDialogOpen] = useToggle();

  return (
    <AddCourseButton
      isAddCourseDialogOpen={isAddCourseDialogOpen}
      toggleAddCourseDiaologOpen={setAddCourseDialogOpen}
    />
  );
};

export default AddCourseButtonContainer;
