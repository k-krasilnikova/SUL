import { FC } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/PageTitle';
import { ButtonLabels } from 'constants/ButtonLabels';

import ActionButton from './ActionButton';
import CourseInfoToggle from './CourseInfoToggle';
import Material from './Material';
import StageController from './StageController';
import { LearningPageContainer, BackButton, LearningWrapper } from './styled';
import Exercise from './Exercise';
import { ILearningProps } from './types';

const LearningCourse: FC<ILearningProps> = ({
  courseContent,
  courseMaterial,
  myCoursesPath,
  ...props
}) => (
  <PageTitle title="Learning course">
    <LearningPageContainer>
      <BackButton disableElevation variant="contained" component={Link} to={myCoursesPath}>
        {ButtonLabels.back}
      </BackButton>
      <LearningWrapper>
        <StageController {...props} />
        <Material courseMaterial={courseContent} />
        <CourseInfoToggle {...props} />
        <ActionButton {...props} />
        {courseMaterial.exercise && (
          <Exercise courseExercise={courseMaterial.exercise} {...props} />
        )}
      </LearningWrapper>
    </LearningPageContainer>
  </PageTitle>
);

export default LearningCourse;
