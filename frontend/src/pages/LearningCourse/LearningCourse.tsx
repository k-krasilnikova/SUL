import React from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { Back, Forward } from 'components/Arrows';
import { PATHS } from 'constants/routes';
import { playVideo } from 'icons';
import { MATERIAL } from 'constants/materials';

import {
  LearningPageContainer,
  BackButton,
  LearningWrapper,
  StepperController,
  Step,
  MaterialWrapper,
  MaterialText,
  MaterialVideo,
  DescriptionWrapper,
  Description,
  DescriptionTitle,
  DescriptionText,
  StartTestButton,
  NextButton,
  ButtonWrapper,
  StyledButton,
  ToggleDescription,
  ExpandLessIcon,
  ExpandMoreIcon,
  PlayVideoIcon,
} from './styled';
import { StartTestDialog } from './StartTestDialog';

interface LearningProps {
  stage: number;
  maxStage: number;
  dialogOpen: boolean;
  stageBack: () => void;
  stageForward: () => void;
  handleClickDialogOpen: () => void;
  handleStartTest: () => void;
  handleDialogClose: () => void;
  courseDescription?: {
    title: string;
    info: string;
  };
  testEnabled: boolean;
  testTimeout?: number;
  backDisabled: boolean;
  forwardDisabled: boolean;
  material: string;
  materialType: string;
  videoPreview: string | boolean;
  isDescriptionOpen: boolean;
  toggleDescriptionOpen: () => void;
}

const LearningCourse: React.FC<LearningProps> = ({
  stage,
  maxStage,
  dialogOpen,
  stageBack,
  stageForward,
  courseDescription,
  testTimeout,
  testEnabled,
  backDisabled,
  forwardDisabled,
  material,
  materialType,
  handleStartTest,
  handleClickDialogOpen,
  handleDialogClose,
  videoPreview,
  isDescriptionOpen,
  toggleDescriptionOpen,
}) => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <Link to={PATHS.myCourses}>
        <BackButton disableElevation variant="contained">
          Back
        </BackButton>
      </Link>
      <LearningWrapper>
        <StepperController>
          <StyledButton onClick={stageBack} disabled={backDisabled}>
            <Back arrowDisabled={backDisabled} />
          </StyledButton>
          <Step>
            {stage}/{maxStage}
          </Step>
          <StyledButton onClick={stageForward} disabled={forwardDisabled}>
            <Forward arrowDisabled={forwardDisabled} />
          </StyledButton>
        </StepperController>
        <MaterialWrapper>
          {materialType === MATERIAL.video ? (
            <MaterialVideo
              url={material}
              playIcon={<PlayVideoIcon src={playVideo} alt="play" />}
              light={videoPreview}
              playing
              controls
              width="100%"
              height="100%"
              frameBorder="0"
            />
          ) : (
            <MaterialText>{material}</MaterialText>
          )}
        </MaterialWrapper>
        <ToggleDescription onClick={toggleDescriptionOpen}>
          Comments
          {isDescriptionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ToggleDescription>
        <ButtonWrapper>
          {testEnabled ? (
            <>
              <StartTestButton variant="contained" onClick={handleClickDialogOpen}>
                Start the Test
              </StartTestButton>
              <StartTestDialog
                isOpened={dialogOpen}
                testTimeout={testTimeout}
                handleClose={handleDialogClose}
                handleStartTest={handleStartTest}
                size="medium"
              />
            </>
          ) : (
            <NextButton variant="contained" onClick={stageForward}>
              Next
            </NextButton>
          )}
        </ButtonWrapper>
        {courseDescription && (
          <DescriptionWrapper isDescriptionOpen={isDescriptionOpen}>
            <Description>
              <DescriptionTitle>{courseDescription.title}</DescriptionTitle>
              <DescriptionText>{courseDescription.info}</DescriptionText>
            </Description>
          </DescriptionWrapper>
        )}
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
