import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ITestStepProps } from 'pages/CourseEditor/types';
import { FormWrapper, SectionName } from 'pages/CourseEditor/DefinitionStep/styled';
import Loader from 'components/Loader';

import TestItem from './TestItem';

const TestStep: FC<ITestStepProps> = ({ formik, testResponse, isTestLoading }) =>
  isTestLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{Titles.testStepTitle}</SectionName>
      <TestItem formik={formik} testResponse={testResponse} />
    </FormWrapper>
  );

export default TestStep;
