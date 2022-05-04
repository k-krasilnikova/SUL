import React, { FC, BaseSyntheticEvent } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import LessonItem from './LessonItem';
import {
  LessonsStepContainer,
  LessonsStepWrapper,
  BackButton,
  LessonsStepTitle,
  LessonsStepBox,
  ButtonsBox,
  NextButton,
  PreviousButton,
} from './styled';

interface ILessonsStepProps {
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  handleSubmit?: () => void;
  handleChange?: (event: BaseSyntheticEvent) => void;
  checkPastedValue?: (event: BaseSyntheticEvent) => void;
  lessonInputValues?: any;
  selectOption: string;
  stageNext?: () => void;
  stageBack?: () => void;
  formValues?: any;
}

const LessonsStep: FC<ILessonsStepProps> = ({
  handleBackButtonClick,
  handleSubmit,
  selectOption,
  handleChange,
  checkPastedValue,
  lessonInputValues,
  stageNext,
  stageBack,
  formValues,
}) => (
  <LessonsStepContainer>
    <BackButton variant="medium" onClick={handleBackButtonClick}>
      {ButtonLabels.back}
    </BackButton>
    <LessonsStepWrapper>
      <LessonsStepTitle>Add course files and description</LessonsStepTitle>
      <LessonsStepBox>
        <LessonItem
          formValues={formValues}
          selectOption={selectOption}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          checkPastedValue={checkPastedValue}
          lessonInputValues={lessonInputValues}
        />
      </LessonsStepBox>
    </LessonsStepWrapper>
    <ButtonsBox>
      <PreviousButton variant="medium" onClick={stageBack}>
        {ButtonLabels.previous}
      </PreviousButton>
      <NextButton variant="medium" onClick={stageNext}>
        {ButtonLabels.next}
      </NextButton>
    </ButtonsBox>
  </LessonsStepContainer>
);

export default LessonsStep;
