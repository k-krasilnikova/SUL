import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { IActionButtonsProps, ApplyCourseButtonType } from 'pages/EmployeeProfile/types';

import ActionButton from './ActionButton';
import { ActionButtonsWrapper } from './styled';

const ActionButtons: FC<IActionButtonsProps> = ({
  clickedButtonType,
  isLoading,
  handleAddCourses,
  handleAddCoursesWithAssessment,
  ...props
}) => (
  <ActionButtonsWrapper>
    <ActionButton
      label={ButtonLabels.addWithInterview}
      onClick={handleAddCoursesWithAssessment}
      isLoading={isLoading && clickedButtonType === ApplyCourseButtonType.withAssessment}
      {...props}
    />
    <ActionButton
      label={ButtonLabels.add}
      onClick={handleAddCourses}
      isLoading={isLoading && clickedButtonType === ApplyCourseButtonType.withoutAssessment}
      {...props}
    />
  </ActionButtonsWrapper>
);

export default ActionButtons;
