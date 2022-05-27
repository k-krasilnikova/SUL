/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { MenuItem } from '@mui/material';

import { BUTTON_VARIANT, EditorTitles } from 'constants/courseEditor';
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

const QuestionItem: FC<IQuestionItemProps> = ({ index, question, formik, unGroupedAnswers }) => (
  <QuestionWrapper key={index}>
    <QuestionTitle>{`${EditorTitles.questionNumber}${question?.qN}`}</QuestionTitle>
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
    {Object.values(unGroupedAnswers).map((answer, key) => (
      <RadioButtonBox key={answer.aN}>
        <RadioSelectAnswer
          name={`test.questions[${index}].answers[${key}].aN`}
          id={`test.questions[${index}].answers[${key}].aN`}
          value={answer.aN}
          onChange={formik.handleChange}
        />
        <InputAnswer
          variant="standard"
          value={answer.variant}
          id={`test.questions[${index}].answers[${key}].variant`}
          name={`test.questions[${index}].answers[${key}].variant`}
          onChange={formik.handleChange}
        />
      </RadioButtonBox>
    ))}
  </QuestionWrapper>
);

export default QuestionItem;
