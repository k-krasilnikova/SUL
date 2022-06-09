import { FC, useState } from 'react';

import { IActionButtonsContainerProps, ApplyCourseButtonType } from 'pages/EmployeeProfile/types';

import ActionButtons from './ActionButtons';

export const ActionButtonsContainer: FC<IActionButtonsContainerProps> = ({
  addCoursesToEmployeeMutate,
  ...props
}) => {
  const [clickedButtonType, setClickedButtonType] = useState<ApplyCourseButtonType>();

  const handleAddCoursesWithAssessment = () => {
    addCoursesToEmployeeMutate(true);
    setClickedButtonType(ApplyCourseButtonType.withAssessment);
  };

  const handleAddCourses = () => {
    addCoursesToEmployeeMutate(false);
    setClickedButtonType(ApplyCourseButtonType.withoutAssessment);
  };

  return (
    <ActionButtons
      clickedButtonType={clickedButtonType}
      handleAddCourses={handleAddCourses}
      handleAddCoursesWithAssessment={handleAddCoursesWithAssessment}
      {...props}
    />
  );
};

export default ActionButtonsContainer;
