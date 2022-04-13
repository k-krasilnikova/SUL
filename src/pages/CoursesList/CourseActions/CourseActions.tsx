import React from 'react';
import { Link } from 'react-router-dom';

import { buttonSpinner } from 'animations';
import { ActionButton } from 'components/Button/ButtonVariants';
import { CustomButton } from 'components/Button/ButtonVariants/styled';
import ButtonLoader from 'components/ButtonLoader';
import { COURSE_LABELS } from 'constants/statuses';
import { ButtonLabels } from 'constants/ButtonLabels';
import { COURSE_DISABLE_DAYS } from 'constants/time';
import { ClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';
import { chooseListPath } from 'utils/helpers/paths/choosePath';

import { CourseActionsBox, CourseActionsWrapper } from './styled';

interface ICourseActions {
  course: ICourse;
  index: number;
  clientCourses?: ClientCourse[];
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
}) => (
  <CourseActionsBox key={`${course._id}_box`}>
    <CourseActionsWrapper key={`${course._id}_actions`}>
      <Link to={chooseListPath(course, index, clientCourses)}>
        <CustomButton color="primary" variant="mediumOutlined">
          {ButtonLabels.details}
        </CustomButton>
      </Link>
      {!isAdmin &&
        (targetLoading && targetId === course._id ? (
          <CustomButton variant="mediumOutlined" disabled>
            <ButtonLoader buttonSpinner={buttonSpinner} />
          </CustomButton>
        ) : clientCourses ? (
          <ActionButton
            label={COURSE_LABELS[clientCourses[index].status]}
            status={clientCourses[index].status}
            progress={clientCourses[index].progress}
            applyDate={clientCourses[index].applyDate}
            courseId={clientCourses[index]._id}
            timeout={COURSE_DISABLE_DAYS}
          />
        ) : (
          <CustomButton id={course._id} onClick={handleApplyCourse} variant="mediumContained">
            {ButtonLabels.applyTheCourse}
          </CustomButton>
        ))}
    </CourseActionsWrapper>
  </CourseActionsBox>
);

export default CourseActions;
