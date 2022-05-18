import { FC } from 'react';

import ProgressBar from 'components/ProgressBar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';

import { ICourseItemProps } from './types';
import {
  CourseItemText,
  CoursesDivider,
  CoursesListItem,
  CourseStatus,
  CourseTitle,
} from './styled';

const CourseItem: FC<ICourseItemProps> = ({ title, status, progressValue, progressVariant }) => (
  <>
    <CoursesListItem>
      <ProgressBar size={Size.small} value={progressValue} variant={progressVariant} />
      <CourseItemText>
        <Tooltip title={title}>
          <CourseTitle>{title}</CourseTitle>
        </Tooltip>
        <CourseStatus>{setFirstLetterUppercase(status)}</CourseStatus>
      </CourseItemText>
    </CoursesListItem>
    <CoursesDivider />
  </>
);

export default CourseItem;
