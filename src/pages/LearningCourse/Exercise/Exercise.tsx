import { FC } from 'react';

import { IExercise } from 'types/course';

import {
  CourseInfoWrapper,
  CourseInfoContent,
  CourseInfoTitle,
  CourseInfoText,
  CodeBlock,
} from './styled';

interface IExerciseProps {
  courseExersice: IExercise;
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({
  isCourseInfoOpen,
  courseExersice: { title, task, code },
}) => (
  <CourseInfoWrapper isCourseInfoOpen={isCourseInfoOpen}>
    <CourseInfoContent>
      <CourseInfoTitle>{title}</CourseInfoTitle>
      <CourseInfoText>{task}</CourseInfoText>
      {code && (
        <pre>
          <CodeBlock>{code}</CodeBlock>
        </pre>
      )}
    </CourseInfoContent>
  </CourseInfoWrapper>
);

export default Exercise;
