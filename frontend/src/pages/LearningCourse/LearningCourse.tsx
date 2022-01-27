import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import { AuthorizedLayout } from 'components/Layout';
import { Back, Forward } from 'components/Arrows';
import { PATHS } from 'constants/routes';
import { playVideo } from 'icons';

import {
  LearningPageContainer,
  BackButton,
  LearningWrapper,
  StepperController,
  Step,
  MaterialWrapper,
  Description,
  DescriptionTitle,
  DescriptionText,
  StartTestButton,
  NextButton,
  NextButtonWrapper,
} from './styled';

interface LearningProps {
  stage: number;
  maxStage: number;
  stageBack: () => void;
  stageForward: () => void;
  courseDescription?: {
    title: string;
    info: string;
  };
  testEnabled: boolean;
  backDisabled: boolean;
  forwardDisabled: boolean;
  material: string;
}

const LearningCourse: React.FC<LearningProps> = ({
  stage,
  maxStage,
  stageBack,
  stageForward,
  courseDescription,
  testEnabled,
  backDisabled,
  forwardDisabled,
  material,
}) => {
  return (
    <AuthorizedLayout pageName="Learning course">
      <LearningPageContainer>
        <Link to={PATHS.myCourses}>
          <BackButton variant="contained">Back</BackButton>
        </Link>
        <LearningWrapper>
          <StepperController>
            <IconButton onClick={stageBack} disabled={backDisabled}>
              <Back arrowDisabled={backDisabled} />
            </IconButton>
            <Step>
              {stage}/{maxStage}
            </Step>
            <IconButton onClick={stageForward} disabled={forwardDisabled}>
              <Forward arrowDisabled={forwardDisabled} />
            </IconButton>
          </StepperController>
          <MaterialWrapper>
            <ReactPlayer
              url={material}
              height="100%"
              width="100%"
              playIcon={<img src={playVideo} alt="play" />}
              light
              playing
              controls
            />
          </MaterialWrapper>
          {courseDescription && (
            <Description>
              <DescriptionTitle>{courseDescription.title}</DescriptionTitle>
              <DescriptionText>{courseDescription.info}</DescriptionText>
            </Description>
          )}
          {testEnabled ? (
            <StartTestButton variant="contained">Start the Test</StartTestButton>
          ) : (
            <NextButtonWrapper>
              <NextButton variant="contained" onClick={stageForward}>
                Next
              </NextButton>
            </NextButtonWrapper>
          )}
        </LearningWrapper>
      </LearningPageContainer>
    </AuthorizedLayout>
  );
};

export default LearningCourse;
