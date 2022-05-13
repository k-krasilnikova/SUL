import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';
import { Titles } from 'constants/courseEditor';
import { ITestStepProps } from 'pages/CourseEditor/types';

import TestItem from './TestItem';
import {
  TestStepContainer,
  TestStepWrapper,
  BackButton,
  TestStepTitle,
  ButtonsBox,
  SaveButton,
  PreviousButton,
} from './styled';

const TestStep: FC<ITestStepProps> = ({
  formik,
  handleBackButtonClick,
  stageBack,
  isCurrentAnswer,
  handleChangeAnswer,
}) => (
  <TestStepContainer>
    <BackButton variant="medium" onClick={handleBackButtonClick}>
      {ButtonLabels.back}
    </BackButton>
    <TestStepWrapper>
      <TestStepTitle>{Titles.testStepTitle}</TestStepTitle>
      <TestItem
        formik={formik}
        handleChangeAnswer={handleChangeAnswer}
        isCurrentAnswer={isCurrentAnswer}
      />
    </TestStepWrapper>
    <ButtonsBox>
      <PreviousButton variant="medium" onClick={stageBack}>
        {ButtonLabels.previous}
      </PreviousButton>
      <SaveButton variant="medium" onClick={stageBack}>
        {ButtonLabels.save}
      </SaveButton>
    </ButtonsBox>
  </TestStepContainer>
);

export default TestStep;
