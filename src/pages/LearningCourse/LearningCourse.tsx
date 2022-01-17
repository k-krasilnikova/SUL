import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import { COURSE_TEXT, COURSE_DESCRIPTION } from 'constants/courseText';
import { arrowBack, arrowForward } from 'icons';

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

const LearningCourse: React.FC = () => (
  <AuthorizedLayout pageName="Learning course">
    <LearningPageContainer>
      <BackButton variant="contained">Back</BackButton>
      <LearningWrapper>
        <StepperController>
          <img alt="back" src={arrowBack} />
          <Step>2/7</Step>
          <img alt="forward" src={arrowForward} />
        </StepperController>
        <TextWrapper>{COURSE_TEXT[1]}</TextWrapper>
        {COURSE_DESCRIPTION && (
          <Description>
            <DescriptionTitle>{COURSE_DESCRIPTION.title}</DescriptionTitle>
            <DescriptionText>{COURSE_DESCRIPTION.info}</DescriptionText>
          </Description>
        )}
        <StartTestButton disabled>Start the test</StartTestButton>
      </LearningWrapper>
    </LearningPageContainer>
  </AuthorizedLayout>
);

export default LearningCourse;
