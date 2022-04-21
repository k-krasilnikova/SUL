import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { IClientCourse } from 'types/clientCourse';
import { TCourseInfo, TContentElement } from 'types/course';

import ActionButton from './ActionButton';
import CourseInfoToggle from './CourseInfoToggle';
import Material from './Material';
import StageController from './StageController';
import { LearningPageContainer, BackButton, LearningWrapper } from './styled';
import Exercise from './Exercise';

interface IProps {
  stage: number;
  maxStage: number;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  isCourseInfoOpen: boolean;
  isTestEnabled: boolean;
  isLoading: boolean;
  courseInfo: TCourseInfo;
  courseMaterial: TContentElement;
  handleStageBack: () => void;
  handleStageForward: () => void;
  toggleCourseInfoOpen: () => void;
  clientCourse?: IClientCourse;
}

const LearningCourse: FC<IProps> = ({ courseMaterial, ...props }) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <BackButton disableElevation variant="contained" component={Link} to={PATHS.myCourses}>
        {ButtonLabels.back}
      </BackButton>
      <LearningWrapper>
        <StageController {...props} />
        <Material courseMaterial={courseMaterial} />
        <CourseInfoToggle {...props} />
        <ActionButton {...props} />
        <Exercise {...props} />
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
