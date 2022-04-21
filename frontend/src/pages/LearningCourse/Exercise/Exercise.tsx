import { Code } from '@mui/icons-material';
import { FC } from 'react';

import { IMaterial } from 'types/course';

import { CourseInfoWrapper, CourseInfoContent, CourseInfoTitle, CourseInfoText } from './styled';

interface IExerciseProps {
  materialEx: IMaterial['exercise'];
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({ isCourseInfoOpen, materialEx }) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{materialEx?.title}</CourseInfoTitle>
      <CourseInfoText>{materialEx?.task}</CourseInfoText>
      <Code>{materialEx?.code}</Code>
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default Exercise;
