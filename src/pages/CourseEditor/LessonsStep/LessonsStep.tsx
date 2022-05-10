import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { ILessonsStepProps } from 'pages/CourseEditor/types';

import LessonItem from './LessonItem';
import {
  LessonsStepContainer,
  LessonsStepWrapper,
  BackButton,
  LessonsStepTitle,
  ButtonsBox,
  NextButton,
  PreviousButton,
  AddMoreLessonsButton,
} from './styled';

const LessonsStep: FC<ILessonsStepProps> = ({
  formik,
  selectOption,
  handleBackButtonClick,
  handleChangeOption,
  stageNext,
  stageBack,
}) => (
  <LessonsStepContainer>
    <BackButton variant="medium" onClick={handleBackButtonClick}>
      {ButtonLabels.back}
    </BackButton>
    <LessonsStepWrapper>
      <LessonsStepTitle>Add course files and description</LessonsStepTitle>
      <LessonItem
        formik={formik}
        selectOption={selectOption}
        handleChangeOption={handleChangeOption}
      />
      <AddMoreLessonsButton type="button">{ButtonLabels.addLessons}</AddMoreLessonsButton>
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
