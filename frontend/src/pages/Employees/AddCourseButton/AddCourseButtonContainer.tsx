import { FC } from 'react';

import { useToggle } from 'hooks';

import AddCourseButton from './AddCourseButton';

const AddCourseButtonContainer: FC = () => {
  const [isAddCourseDiaologOpen, setAddCourseDiaologOpen] = useToggle();

  return (
    <AddCourseButton
      isAddCourseDiaologOpen={isAddCourseDiaologOpen}
      toggleAddCourseDiaologOpen={setAddCourseDiaologOpen}
    />
  );
};

export default AddCourseButtonContainer;
