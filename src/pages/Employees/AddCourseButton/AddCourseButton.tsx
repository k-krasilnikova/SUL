import { FC } from 'react';

import { Button } from 'components/Button';
import { ButtonLabels } from 'components/Button/ButtonsEnums';

import { AddCourseDialog } from './AddCourseDialog';

interface IProps {
  isAddCourseDiaologOpen: boolean;
  toggleAddCourseDiaologOpen: () => void;
}

const AddCourseButton: FC<IProps> = ({ isAddCourseDiaologOpen, toggleAddCourseDiaologOpen }) => (
  <>
    <Button variant="mediumContained" onClick={toggleAddCourseDiaologOpen}>
      {ButtonLabels.addCourse}
    </Button>
    <AddCourseDialog isOpened={isAddCourseDiaologOpen} handleClose={toggleAddCourseDiaologOpen} />
  </>
);

export default AddCourseButton;
