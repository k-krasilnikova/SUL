import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';

import ActionButton from './ActionButton';
import CourseInfoToggle from './CourseInfoToggle';
import Material from './Material';
import StageController from './StageController';
import { LearningPageContainer, BackButton, LearningWrapper } from './styled';
import Exercise from './Exercise';
import { ILearningProps } from './types';

const LearningCourse: FC<ILearningProps> = ({ courseContent, courseMaterial, ...props }) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <BackButton disableElevation variant="contained" component={Link} to={PATHS.myCourses}>
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
  </AuthorizedLayout>
);

export default LearningCourse;
