import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import { AuthorizedLayout } from 'components/Layout';
import { arrowBack, arrowForward } from 'icons';
import { PATHS } from 'constants/routes';

import {
  LearningPageContainer,
  BackButton,
  LearningWrapper,
  StepperController,
  Step,
  TextWrapper,
  Description,
  DescriptionTitle,
  DescriptionText,
  StartTestButton,
} from './styled';

interface LearningProps {
  stage: number;
  maxStage: number;
  stageBack: () => void;
  stageForward: () => void;
  courseText: Array<string>;
  courseDescription: {
    title: string;
    info: string;
  };
  testEnabled: boolean;
}

const LearningCourse: React.FC<LearningProps> = ({
  stage,
  maxStage,
  stageBack,
  stageForward,
  courseText,
  courseDescription,
  testEnabled,
}) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <Link to={PATHS.myCourses}>
        <BackButton variant="contained">Back</BackButton>
      </Link>
      <LearningWrapper>
        <StepperController>
          <IconButton onClick={stageBack}>
            <img alt="back" src={arrowBack} />
          </IconButton>
          <Step>
            {stage}/{maxStage}
          </Step>
          <IconButton onClick={stageForward}>
            <img alt="forward" src={arrowForward} />
          </IconButton>
        </StepperController>
        <TextWrapper>{courseText[stage - 1]}</TextWrapper>
        {courseDescription && (
          <Description>
            <DescriptionTitle>{courseDescription.title}</DescriptionTitle>
            <DescriptionText>{courseDescription.info}</DescriptionText>
          </Description>
        )}
        <StartTestButton disabled={!testEnabled}>Start the test</StartTestButton>
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
