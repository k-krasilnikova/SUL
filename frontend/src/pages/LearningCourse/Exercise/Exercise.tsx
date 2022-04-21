import { Code } from '@mui/icons-material';
import { FC } from 'react';

import { IMaterial } from 'types/course';

import { CourseInfoWrapper, CourseInfoContent, CourseInfoTitle, CourseInfoText } from './styled';

interface IExerciseProps {
  courseExersice: IMaterial['exercise'];
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({ isCourseInfoOpen, courseExersice }) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{courseExersice?.title}</CourseInfoTitle>
      <CourseInfoText>{courseExersice?.task}</CourseInfoText>
      <Code>{courseExersice?.code}</Code>
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default Exercise;
