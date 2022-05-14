import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { Titles } from 'constants/courseEditor';
import { ILessonsStepProps } from 'pages/CourseEditor/types';

import LessonItem from './LessonItem';
import {
  LessonsStepContainer,
  LessonsStepWrapper,
  LessonsStepTitle,
  AddMoreLessonsButton,
} from './styled';

const LessonsStep: FC<ILessonsStepProps> = ({
  formik,
  selectOption,
  handleChangeOption,
  isAddMoreLessons,
  handleAddMoreLessons,
}) => (
  <LessonsStepContainer>
    <LessonsStepWrapper>
      <LessonsStepTitle>{Titles.lessonStepTitle}</LessonsStepTitle>
      <LessonItem
        formik={formik}
        selectOption={selectOption}
        handleChangeOption={handleChangeOption}
        isAddMoreLessons={isAddMoreLessons}
      />
      <AddMoreLessonsButton variant="medium" type="button" onClick={handleAddMoreLessons}>
        {ButtonLabels.addLessons}
      </AddMoreLessonsButton>
    </LessonsStepWrapper>
  </LessonsStepContainer>
);

export default LessonsStep;
