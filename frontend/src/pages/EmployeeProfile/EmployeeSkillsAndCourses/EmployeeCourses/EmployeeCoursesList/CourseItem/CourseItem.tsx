import { FC } from 'react';

import ProgressBar from 'components/ProgressBar';

import { Size } from 'enums/sizes';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';

import { ICourseItemProps } from './types';
import {
  CourseItemText,
  CoursesDivider,
  CoursesListItem,
  CourseStatus,
  CourseTitle,
  HoverCourseTitle,
} from './styled';

const CourseItem: FC<ICourseItemProps> = ({
  title,
  status,
  progressValue,
  progressVariant,
  hideCourseInfo,
  showCourseInfo,
  isShown,
}) => (
  <>
    <CoursesListItem>
      <ProgressBar size={Size.small} value={progressValue} variant={progressVariant} />
      <CourseItemText>
        <CourseTitle onMouseEnter={showCourseInfo} onMouseLeave={hideCourseInfo}>
          {title}
          {isShown && <HoverCourseTitle>{title}</HoverCourseTitle>}
        </CourseTitle>
        <CourseStatus>{setFirstLetterUppercase(status)}</CourseStatus>
      </CourseItemText>
    </CoursesListItem>
    <CoursesDivider />
  </>
);

export default CourseItem;
