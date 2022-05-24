/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ITestStepProps } from 'pages/CourseEditor/types';
import { FormWrapper, SectionName } from 'pages/CourseEditor/DefinitionStep/styled';
import Loader from 'components/Loader';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { SkillButton } from 'pages/CourseEditor/SkillsStep/styled';
import { ButtonLabels } from 'constants/ButtonLabels';
import { FieldArray } from 'formik';

import { ItemTitle, TestBasicField, TestItemWrapper, TestTitleBox } from './QuestionItem/styled';
import QuestionItem from './QuestionItem';

const TestStep: FC<ITestStepProps> = ({ formik, testResponse, isTestLoading }) =>
  isTestLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{Titles.testStepTitle}</SectionName>
      <TestItemWrapper>
        <ItemTitle>{Titles.testDetails}</ItemTitle>
        <TestTitleBox>
          <TestBasicField
            label="Title"
            value={testResponse?.title}
            variant="outlined"
            onChange={formik.handleChange}
          />
          <TestBasicField
            label="Description"
            value={testResponse?.timeout}
            variant="outlined"
            onChange={formik.handleChange}
          />
        </TestTitleBox>
        {testResponse &&
          // formik.values.test?.questions.map((question, index) => {
          testResponse.questions.map((question, index) => {
            return (
              <div key={index}>
                <FieldArray name="questions">
                  {({ remove, push }) => (
                    <>
                      <QuestionItem formik={formik} question={question} index={index} />
                      {isLastElem(testResponse.questions, index) ? (
                        <SkillButton variant="mediumOutlined" onClick={() => push({})}>
                          {ButtonLabels.addMoreQuestions}
                        </SkillButton>
                      ) : (
                        <SkillButton variant="mediumOutlined" onClick={() => remove(index)}>
                          {ButtonLabels.removeQuestion}
                        </SkillButton>
                      )}
                    </>
                  )}
                </FieldArray>
              </div>
            );
          })}
      </TestItemWrapper>
    </FormWrapper>
  );

export default TestStep;
