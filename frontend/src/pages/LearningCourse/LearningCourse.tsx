import React from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { Back, Forward } from 'components/Arrows';
import { PATHS } from 'constants/routes';
import { playVideo } from 'icons';
import { MATERIAL } from 'constants/materials';
import { ClientCourse } from 'types/clientCourse';
import { CustomButton } from 'components/Button/styled';
import withStartTest from 'components/StartTestDialog/withStartTest';

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
  ButtonWrapper,
  StyledButton,
  ToggleDescription,
  ExpandLessIcon,
  ExpandMoreIcon,
} from './styled';

interface LearningProps {
  stage: number;
  maxStage: number;
  stageBack: () => void;
  stageForward: () => void;
  backDisabled: boolean;
  forwardDisabled: boolean;
  material: string;
  materialType: string;
  videoPreview: string | boolean;
  isDescriptionOpen: boolean;
  toggleDescriptionOpen: () => void;
  isTestEnable?: boolean;
  handleDialogOpen?: () => void;
  courseDescription?: {
    title: string;
    info: string;
  };
}

interface OuterProps {
  progress?: ClientCourse['progress'];
  status?: string;
}

const LearningCourse: React.FC<LearningProps> = ({
  stage,
  maxStage,
  stageBack,
  stageForward,
  courseDescription,
  isTestEnable,
  backDisabled,
  forwardDisabled,
  material,
  materialType,
  handleDialogOpen,
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
        <ToggleDescription onClick={toggleDescriptionOpen}>
          Comments
          {isDescriptionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ToggleDescription>
        <ButtonWrapper>
          {isTestEnable ? (
            <>
              <CustomButton variant="contained" onClick={handleDialogOpen}>
                Start the Test
              </CustomButton>
            </>
          ) : (
            <CustomButton variant="contained" onClick={stageForward}>
              Next
            </CustomButton>
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

export default withStartTest<OuterProps & LearningProps>(LearningCourse);
