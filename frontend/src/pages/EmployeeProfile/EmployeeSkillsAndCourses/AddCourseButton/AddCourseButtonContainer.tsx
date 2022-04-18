import { FC } from 'react';

import { useToggle } from 'hooks';

import AddCourseButton from './AddCourseButton';

interface IAddCourseButtonContainer {
  refetchEmployeeProfile: () => void;
}

const AddCourseButtonContainer: FC<IAddCourseButtonContainer> = ({ refetchEmployeeProfile }) => {
  const [isAddCourseDialogOpen, setAddCourseDialogOpen] = useToggle();

  return (
    <AddCourseButton
      isAddCourseDialogOpen={isAddCourseDialogOpen}
      toggleAddCourseDiaologOpen={setAddCourseDialogOpen}
      refetchEmployeeProfile={refetchEmployeeProfile}
    />
  );
};

export default AddCourseButtonContainer;
