import { FC } from 'react';

import { TCourseInfo } from 'types/course';

import { CourseInfoWrapper, CourseInfoContent, CourseInfoTitle, CourseInfoText } from './styled';

interface IExerciseProps {
  courseInfo: TCourseInfo;
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({ isCourseInfoOpen, courseInfo: { title, description } }) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{title}</CourseInfoTitle>
      <CourseInfoText>{description}</CourseInfoText>
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default Exercise;
