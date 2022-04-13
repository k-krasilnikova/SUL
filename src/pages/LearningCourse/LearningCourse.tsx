import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { ClientCourse, ICourseInfo } from 'types/clientCourse';

import ActionButton from './ActionButton';
import CourseInfo from './CourseInfo';
import CourseInfoToggle from './CourseInfoToggle';
import Material from './Material';
import StageController from './StageController';
import { LearningPageContainer, BackButton, LearningWrapper } from './styled';

interface IProps {
  stage: number;
  maxStage: number;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  isCourseInfoOpen: boolean;
  isTestEnabled: boolean;
  isLoading: boolean;
  courseInfo: ICourseInfo;
  courseMaterial: string;
  handleStageBack: () => void;
  handleStageForward: () => void;
  togglCourseInfOpen: () => void;
  clientCourse?: ClientCourse;
}

const LearningCourse: FC<IProps> = ({
  stage,
  maxStage,
  isTestEnabled,
  isBackDisabled,
  isForwardDisabled,
  isCourseInfoOpen,
  isLoading,
  courseInfo,
  courseMaterial,
  handleStageBack,
  handleStageForward,
  togglCourseInfOpen,
  clientCourse,
}) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <Link to={PATHS.myCourses}>
        <BackButton disableElevation variant="contained">
          {ButtonLabels.back}
        </BackButton>
      </Link>
      <LearningWrapper>
        <StageController
          stage={stage}
          maxStage={maxStage}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          handleStageBack={handleStageBack}
          handleStageForward={handleStageForward}
        />
        <Material courseMaterial={courseMaterial} />
        <CourseInfoToggle
          isCourseInfoOpen={isCourseInfoOpen}
          toggleCourseInfoOpen={togglCourseInfOpen}
        />
        <ActionButton
          isLoading={isLoading}
          isTestEnabled={isTestEnabled}
          handleStageForward={handleStageForward}
          clientCourse={clientCourse}
        />
        <CourseInfo courseInfo={courseInfo} isCourseInfoOpen={isCourseInfoOpen} />
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
