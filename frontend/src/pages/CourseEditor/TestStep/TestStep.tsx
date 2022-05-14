import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ITestStepProps } from 'pages/CourseEditor/types';

import TestItem from './TestItem';
import { TestStepContainer, TestStepWrapper, TestStepTitle } from './styled';

const TestStep: FC<ITestStepProps> = ({ formik, isCurrentAnswer, handleChangeAnswer }) => (
  <TestStepContainer>
    <TestStepWrapper>
      <TestStepTitle>{Titles.testStepTitle}</TestStepTitle>
      <TestItem
        formik={formik}
        handleChangeAnswer={handleChangeAnswer}
        isCurrentAnswer={isCurrentAnswer}
      />
    </TestStepWrapper>
  </TestStepContainer>
);

export default TestStep;
