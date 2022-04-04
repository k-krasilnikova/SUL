import { FC } from 'react';

import { CourseInfoToggleButton, ExpandLessIcon, ExpandMoreIcon } from './styled';

interface IProps {
  isCourseInfoOpen: boolean;
  toggleCourseInfoOpen: () => void;
}

const CourseInfoToggle: FC<IProps> = ({ isCourseInfoOpen, toggleCourseInfoOpen }) => {
  return (
    <CourseInfoToggleButton onClick={toggleCourseInfoOpen}>
      Comments
      {isCourseInfoOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </CourseInfoToggleButton>
  );
};

export default CourseInfoToggle;
