import React from 'react';
import { Link } from 'react-router-dom';

import { buttonSpinner } from 'animations';
import { ActionButton } from 'components/Button/ButtonVariants';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import ButtonLoader from 'components/ButtonLoader';
import { COURSE_LABELS } from 'constants/statuses';
import { ButtonLabels } from 'constants/ButtonLabels';
import { COURSE_DISABLE_DAYS } from 'constants/time';
import { IClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';
import { chooseListPath } from 'utils/helpers/paths/choosePath';

import { CourseActionsBox, CourseActionsWrapper } from './styled';

interface ICourseActions {
  course: ICourse;
  index: number;
  clientCourses?: IClientCourse[];
  isAdmin?: boolean;
  targetLoading?: boolean;
  targetId?: string;
  handleApplyCourse?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const CourseActions: React.FC<ICourseActions> = ({
  course,
  clientCourses,
  isAdmin,
  index,
  targetLoading,
  targetId,
  handleApplyCourse,
}) => {
  const isButtonContentLoading = targetLoading && targetId === course._id;
  const { _id: courseId, status, progress, applyDate } = clientCourses?.[index] || {};
  return (
    <CourseActionsBox key={`${course._id}_box`}>
      <CourseActionsWrapper key={`${course._id}_actions`}>
        <CustomButton
          color="primary"
          variant="mediumOutlined"
          component={Link}
          to={chooseListPath(course, index, clientCourses)}
        >
          {ButtonLabels.details}
        </CustomButton>
        {!isAdmin &&
          (clientCourses ? (
            <ActionButton
              label={COURSE_LABELS[status as string]}
              status={status}
              progress={progress}
              applyDate={applyDate}
              courseId={courseId}
              timeout={COURSE_DISABLE_DAYS}
            />
          ) : (
            <CustomButton
              id={course._id}
              onClick={handleApplyCourse}
              variant={isButtonContentLoading ? 'mediumOutlined' : 'mediumContained'}
              disabled={isButtonContentLoading}
            >
              {isButtonContentLoading ? (
                <ButtonLoader buttonSpinner={buttonSpinner} />
              ) : (
                ButtonLabels.applyTheCourse
              )}
            </CustomButton>
          ))}
      </CourseActionsWrapper>
    </CourseActionsBox>
  );
};

export default CourseActions;
