import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { IActionButtonsProps } from 'pages/EmployeeProfile/types';

import ActionButton from './ActionButton';
import { ActionButtonsWrapper } from './styled';

const ActionButtons: FC<IActionButtonsProps> = ({
  handleAddCourses,
  handleAddCoursesWithAssessment,
  ...props
}) => (
  <ActionButtonsWrapper>
    <ActionButton
      label={ButtonLabels.addWithInterview}
      onClick={handleAddCoursesWithAssessment}
      {...props}
    />
    <ActionButton label={ButtonLabels.add} onClick={handleAddCourses} {...props} />
  </ActionButtonsWrapper>
);

export default ActionButtons;
