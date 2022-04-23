import { FC } from 'react';

import { CourseTitle, HoverCourseTitle } from './styled';

export interface ICourseItemTitleProps {
  title: string;
  showCourseInfo?: () => void;
  hideCourseInfo?: () => void;
  isShown?: boolean;
}

const CourseItemTitle: FC<ICourseItemTitleProps> = ({
  title,
  hideCourseInfo,
  showCourseInfo,
  isShown,
}) => (
  <>
    <CourseTitle onMouseEnter={showCourseInfo} onMouseLeave={hideCourseInfo}>
      {title.slice(0, 40)}
    </CourseTitle>
    {isShown && <HoverCourseTitle> {title}</HoverCourseTitle>}
  </>
);

export default CourseItemTitle;
