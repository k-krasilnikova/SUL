import { FC, ChangeEvent } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import LessonItem from './LessonItem';
import {
  LessonsStepContainer,
  LessonsStepWrapper,
  BackButton,
  LessonsStepTitle,
  LessonsStepBox,
} from './styled';

interface ILessonsStepProps {
  handleBackButtonClick?: () => void;
  handleSubmit?: () => void;
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectOption: string;
}

const LessonsStep: FC<ILessonsStepProps> = ({
  handleBackButtonClick,
  handleSubmit,
  selectOption,
  handleChange,
}) => (
  <LessonsStepContainer>
    <BackButton variant="medium" onClick={handleBackButtonClick}>
      {ButtonLabels.back}
    </BackButton>
    <LessonsStepWrapper>
      <LessonsStepTitle>Add course files and description</LessonsStepTitle>
      <LessonsStepBox component="form" onSubmit={handleSubmit}>
        <LessonItem handleChange={handleChange} selectOption={selectOption} />
      </LessonsStepBox>
    </LessonsStepWrapper>
  </LessonsStepContainer>
);

export default LessonsStep;
