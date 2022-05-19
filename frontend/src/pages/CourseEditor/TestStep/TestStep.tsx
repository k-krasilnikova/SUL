import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ITestStepProps } from 'pages/CourseEditor/types';
import Loader from 'components/Loader';

import TestItem from './TestItem';
import { TestStepContainer, TestStepWrapper, TestStepTitle } from './styled';

const TestStep: FC<ITestStepProps> = ({
  formik,
  isCurrentAnswer,
  handleChangeAnswer,
  testResponse,
  isTestLoading,
}) =>
  isTestLoading ? (
    <Loader type="content" />
  ) : (
    <TestStepContainer>
      <TestStepWrapper>
        <TestStepTitle>{Titles.testStepTitle}</TestStepTitle>
        <TestItem
          formik={formik}
          handleChangeAnswer={handleChangeAnswer}
          isCurrentAnswer={isCurrentAnswer}
          testResponse={testResponse}
        />
      </TestStepWrapper>
    </TestStepContainer>
  );

export default TestStep;
