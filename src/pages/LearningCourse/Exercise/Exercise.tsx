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
  courseExercise: IExercise;
  isCourseInfoOpen: boolean;
}

const Exercise: FC<IExerciseProps> = ({ isCourseInfoOpen, courseExercise }) => {
  const { title, task, code } = courseExercise;
  return (
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
};
export default Exercise;
