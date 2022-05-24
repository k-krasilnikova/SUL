/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { MenuItem } from '@mui/material';

import { BUTTON_VARIANT, Titles } from 'constants/courseEditor';
import { IQuestionItemProps } from 'pages/CourseEditor/types';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  QuestionWrapper,
  QuestionTitle,
  QuestionInputBox,
  RadioButtonBox,
  RadioSelectAnswer,
  InputAnswer,
  InputText,
} from './styled';

const QuestionItem: FC<IQuestionItemProps> = ({ index, question, formik }) => (
  <QuestionWrapper key={index}>
    <QuestionTitle>{`${Titles.questionNumber}${question?.qN}`}</QuestionTitle>
    <QuestionInputBox>
      <InputText
        value={question?.question}
        id={`questions[${index}].question`}
        name={`test.questions[${index}].question`}
        onChange={formik.handleChange}
      />
      <Field select disabled value="radio" onChange={formik.handleChange}>
        <MenuItem value="input">{BUTTON_VARIANT.input}</MenuItem>
        <MenuItem value="radio">{BUTTON_VARIANT.radio}</MenuItem>
      </Field>
    </QuestionInputBox>
    {question?.answers.map((answer, indx) => (
      <RadioButtonBox key={indx}>
        <RadioSelectAnswer
          name={`Answer ${answer.aN}`}
          value={answer.variant}
          disableRipple
          id="testAnswer"
        />
        <InputAnswer
          variant="standard"
          value={answer.variant}
          id={`test.questions[${index}].answer[${indx}].variant`}
          name={`test.questions[${index}].answer[${indx}].variant`}
          onChange={formik.handleChange}
        />
      </RadioButtonBox>
    ))}
  </QuestionWrapper>
);

export default QuestionItem;
