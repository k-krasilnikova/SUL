/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';

import Loader from 'components/Loader';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { SkillButton } from 'pages/CourseEditor/SkillsStep/styled';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import { EditorTitles } from 'constants/courseEditor';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ITestStepProps } from 'pages/CourseEditor/types';

import QuestionItem from './QuestionItem';
import { ItemTitle, TestBasicField, TestItemWrapper, TestTitleBox } from './QuestionItem/styled';
import { TestStepWrapper } from './styled';

const TestStep: FC<ITestStepProps> = ({
  formik,
  isCourseDataLoading,
  courseData,
  unGroupedAnswers,
}) =>
  isCourseDataLoading ? (
    <Loader type="content" />
  ) : (
    <FormWrapper>
      <SectionName>{EditorTitles.testStepTitle}</SectionName>
      <TestItemWrapper>
        <ItemTitle>{EditorTitles.testDetails}</ItemTitle>
        <TestTitleBox>
          <TestBasicField
            label="Title"
            value={formik.values.test.title}
            id="test.title"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <TestBasicField
            label="Duration"
            value={formik.values.test.timeout}
            id="test.timeout"
            variant="outlined"
            onChange={formik.handleChange}
          />
        </TestTitleBox>
        {formik.values.test?.questions?.map((question, index) => (
          <TestStepWrapper key={index}>
            <FieldArray name="test.questions">
              {({ remove, push }) => (
                <>
                  <QuestionItem
                    unGroupedAnswers={unGroupedAnswers}
                    formik={formik}
                    question={question}
                    index={index}
                    courseData={courseData}
                  />
                  {isLastElem(formik.values.test.questions, index) ? (
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
          </TestStepWrapper>
        ))}
      </TestItemWrapper>
    </FormWrapper>
  );

export default TestStep;
