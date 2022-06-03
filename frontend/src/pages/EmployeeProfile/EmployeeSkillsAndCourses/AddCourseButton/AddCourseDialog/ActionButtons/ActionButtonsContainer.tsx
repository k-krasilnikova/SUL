import { FC } from 'react';

import { IActionButtonsContainerProps } from 'pages/EmployeeProfile/types';

import ActionButtons from './ActionButtons';

export const ActionButtonsContainer: FC<IActionButtonsContainerProps> = ({
  addCoursesToEmployeeMutate,
  ...props
}) => {
  const handleAddCoursesWithAssessment = () => {
    addCoursesToEmployeeMutate(true);
  };

  const handleAddCourses = () => {
    addCoursesToEmployeeMutate(false);
  };

  return (
    <ActionButtons
      handleAddCourses={handleAddCourses}
      handleAddCoursesWithAssessment={handleAddCoursesWithAssessment}
      {...props}
    />
  );
};

export default ActionButtonsContainer;
