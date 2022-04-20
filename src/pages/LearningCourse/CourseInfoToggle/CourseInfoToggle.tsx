import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import { CourseInfoToggleButton, ExpandLessIcon, ExpandMoreIcon } from './styled';

interface ICourseInfoToggle {
  isCourseInfoOpen: boolean;
  toggleCourseInfoOpen: () => void;
}

const CourseInfoToggle: FC<ICourseInfoToggle> = ({ isCourseInfoOpen, toggleCourseInfoOpen }) => (
  <CourseInfoToggleButton onClick={toggleCourseInfoOpen}>
    {ButtonLabels.comments}
    {isCourseInfoOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </CourseInfoToggleButton>
);

export default CourseInfoToggle;
