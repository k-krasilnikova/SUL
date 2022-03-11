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
  Description,
  DescriptionTitle,
  DescriptionText,
  StartTestButton,
  NextButton,
  ButtonWrapper,
  StyledButton,
} from './styled';
import { FormDialog } from './FormDialog';

interface LearningProps {
  stage: number;
  maxStage: number;
  dialogOpen: boolean;
  stageBack: () => void;
  stageForward: () => void;
  handleClickDialogOpen: () => void;
  handleDialogClose: () => void;
  courseDescription?: {
    title: string;
    info: string;
  };
  testEnabled: boolean;
  backDisabled: boolean;
  forwardDisabled: boolean;
  material: string;
  materialType: string;
  videoPreview: string | boolean;
  courseStatus: string;
  courseId: string;
}

const LearningCourse: React.FC<LearningProps> = ({
  stage,
  maxStage,
  dialogOpen,
  stageBack,
  stageForward,
  courseDescription,
  testEnabled,
  backDisabled,
  forwardDisabled,
  material,
  materialType,
  handleClickDialogOpen,
  handleDialogClose,
  videoPreview,
  courseStatus,
  courseId,
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
              playIcon={<img src={playVideo} alt="play" />}
              light={videoPreview}
              playing
              controls
              width="100%"
              height="680px"
              frameBorder="0"
            />
          ) : (
            <MaterialText>{material}</MaterialText>
          )}
        </MaterialWrapper>
        {courseDescription && (
          <Description>
            <DescriptionTitle>{courseDescription.title}</DescriptionTitle>
            <DescriptionText>{courseDescription.info}</DescriptionText>
          </Description>
        )}
        <ButtonWrapper>
          {testEnabled ? (
            <>
              <StartTestButton variant="contained" onClick={handleClickDialogOpen}>
                Start the Test
              </StartTestButton>
              <FormDialog
                dialogOpen={dialogOpen}
                handleDialogClose={handleDialogClose}
                courseStatus={courseStatus}
                courseId={courseId}
              />
            </>
          ) : (
            <NextButton variant="contained" onClick={stageForward}>
              Next
            </NextButton>
          )}
        </ButtonWrapper>
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
