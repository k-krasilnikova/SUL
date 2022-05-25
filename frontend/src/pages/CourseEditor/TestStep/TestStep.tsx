/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { EditorTitles } from 'constants/courseEditor';
import { IStepProps } from 'pages/CourseEditor/types';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { SkillButton } from 'pages/CourseEditor/SkillsStep/styled';
import { ButtonLabels } from 'constants/ButtonLabels';
import { FieldArray } from 'formik';

import { ItemTitle, TestBasicField, TestItemWrapper, TestTitleBox } from './QuestionItem/styled';
import QuestionItem from './QuestionItem';

const TestStep: FC<IStepProps> = ({ formik }) => (
  <FormWrapper>
    <SectionName>{EditorTitles.testStepTitle}</SectionName>
    <TestItemWrapper>
      <ItemTitle>{EditorTitles.testDetails}</ItemTitle>
      <TestTitleBox>
        <TestBasicField
          label="Title"
          value={formik.values.test.title}
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TestBasicField
          label="Duration"
          value={formik.values.test.timeout}
          variant="outlined"
          onChange={formik.handleChange}
        />
      </TestTitleBox>
      {formik.values.test?.questions.map((question, index) => (
        <div key={index}>
          <FieldArray name="questions">
            {({ remove, push }) => (
              <>
                <QuestionItem formik={formik} question={question} index={index} />
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
        </div>
      ))}
    </TestItemWrapper>
  </FormWrapper>
);

export default TestStep;
