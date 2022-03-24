import { FC } from 'react';

import { CourseInfoWrapper, CourseInfoContent, CourseInfoTitle, CourseInfoText } from './styled';

interface IProps {
  courseInfo: { title: string; description: string };
  isCourseInfoOpen: boolean;
}

const CourseInfo: FC<IProps> = ({ isCourseInfoOpen, courseInfo }) => {
  const { title, description } = courseInfo;

  return (
    <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
      <CourseInfoContent>
        <CourseInfoTitle>{title}</CourseInfoTitle>
        <CourseInfoText>{description}</CourseInfoText>
      </CourseInfoContent>
    </CourseInfoWrapper>
  );
};

export default CourseInfo;
