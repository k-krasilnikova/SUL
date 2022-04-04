import { FC } from 'react';

import { ICourseInfo } from 'types/clientCourse';

import { CourseInfoWrapper, CourseInfoContent, CourseInfoTitle, CourseInfoText } from './styled';

interface IProps {
  courseInfo: ICourseInfo;
  isCourseInfoOpen: boolean;
}

const CourseInfo: FC<IProps> = ({ isCourseInfoOpen, courseInfo: { title, description } }) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{title}</CourseInfoTitle>
      <CourseInfoText>{description}</CourseInfoText>
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default CourseInfo;
