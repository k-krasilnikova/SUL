import { FC, BaseSyntheticEvent } from 'react';

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
  AddMoreLessonsButton,
} from './styled';

interface ILessonsStepProps {
  formik: any;
  selectOption: string;
  handleBackButtonClick?: (event: BaseSyntheticEvent) => void;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
  stageNext?: () => void;
  stageBack?: () => void;
}

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
      <LessonsStepBox>
        <LessonItem
          formik={formik}
          selectOption={selectOption}
          handleChangeOption={handleChangeOption}
        />
      </LessonsStepBox>
      <AddMoreLessonsButton type="button">Add more Lessons</AddMoreLessonsButton>
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
