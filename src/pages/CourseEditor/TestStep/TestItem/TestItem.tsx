/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';
import { MenuItem } from '@mui/material';

import { Titles } from 'constants/courseEditor';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ITestItemProps } from 'pages/CourseEditor/types';
import { SkillButton } from 'pages/CourseEditor/SkillsStep/styled';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';
import isLastElem from 'utils/helpers/arrays/isLastElem';

import {
  TestItemWrapper,
  ItemTitle,
  TestTitleBox,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputBox,
  RadioButtonWrapper,
  RadioButtonBox,
  RadioSelectAnswer,
  InputAnswer,
  InputText,
  TestBasicField,
} from './styled';

// const BUTTON_VARIANT = {
//   input: 'Input',
//   radio: 'Radiobutton (One answer)',
// };

const TestItem: FC<ITestItemProps> = ({ formik, testResponse }) => (
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
      testResponse.questions.map((question, index) => (
        <QuestionWrapper key={index}>
          <FieldArray name="test">
            {({ remove, push }) => (
              <>
                <QuestionTitle>{`${Titles.questionNumber}${question.qN}`}</QuestionTitle>
                <QuestionInputBox>
                  <InputText
                    value={question.question}
                    aria-label="Question"
                    onChange={formik.handleChange}
                  />
                  <Field select disabled value="radio" onChange={formik.handleChange}>
                    <MenuItem value="input">Input</MenuItem>
                    <MenuItem value="radio">Radiobutton (One answer)</MenuItem>
                  </Field>
                </QuestionInputBox>
                <RadioButtonWrapper
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Answer"
                  name="radio-buttons-group"
                >
                  {/* <RadioButtonBox>
                    <RadioSelectAnswer name="Answer" value="Answer" disableRipple />
                    <InputAnswer value="Answer" />
                  </RadioButtonBox> */}
                  {question.answers.map((answer) => (
                    <RadioButtonBox>
                      <RadioSelectAnswer
                        name={`Answer ${answer.aN}`}
                        value={answer.variant}
                        disableRipple
                        id="testAnswer"
                      />
                      <InputAnswer
                        variant="standard"
                        value={answer.variant}
                        onChange={formik.handleChange}
                      />
                    </RadioButtonBox>
                  ))}
                </RadioButtonWrapper>
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
        </QuestionWrapper>
      ))}
  </TestItemWrapper>
);

export default TestItem;
