import { FC } from 'react';

import { IMaterial } from 'types/course';

import {
  CourseInfoWrapper,
  CourseInfoContent,
  CourseInfoTitle,
  CourseInfoText,
  CodeBlock,
} from './styled';

interface IExerciseProps {
  courseExersice: IMaterial['exercise'];
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({ isCourseInfoOpen, courseExersice }) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{courseExersice?.title}</CourseInfoTitle>
      <CourseInfoText>{courseExersice?.task}</CourseInfoText>
      {courseExersice?.code && (
        <pre>
          <CodeBlock>{courseExersice.code}</CodeBlock>
        </pre>
      )}
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default Exercise;
