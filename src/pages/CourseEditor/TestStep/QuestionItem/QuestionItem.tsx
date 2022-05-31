/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';
import { MenuItem } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { BUTTON_VARIANT, EditorTitles } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { IQuestionItemProps } from 'pages/CourseEditor/types';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  AddRemoveAnswerButton,
  ButtonsWrapper,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputBox,
  RadioButtonBox,
  RadioSelectAnswer,
  RadioControlLabel,
  InputAnswer,
  InputText,
} from './styled';

const QuestionItem: FC<IQuestionItemProps> = ({ index, question, formik }) => (
  <QuestionWrapper>
    <QuestionTitle>
      {EditorTitles.questionNumber}
      {index + Numbers.one}
    </QuestionTitle>
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
    <RadioButtonBox defaultValue={`test.questions[${index}].answers[${index}].aN`}>
      <FieldArray name={`test.questions[${index}].answers`}>
        {({ remove, push }) => (
          <>
            {question?.answers?.map((answer, key) => (
              <RadioControlLabel
                key={key}
                value={answer.variant}
                control={
                  <RadioSelectAnswer
                    value={answer.aN}
                    color="primary"
                    name={`test.questions[${index}].answers[${key}].aN`}
                    id={`test.questions[${index}].answers[${key}].aN`}
                    onChange={formik.handleChange}
                  />
                }
                label={
                  <InputAnswer
                    variant="standard"
                    value={answer.variant}
                    id={`test.questions[${index}].answers[${key}].variant`}
                    name={`test.questions[${index}].answers[${key}].variant`}
                    onChange={formik.handleChange}
                  />
                }
              />
            ))}
            <ButtonsWrapper>
              <AddRemoveAnswerButton
                variant="mediumOutlined"
                onClick={() =>
                  push({
                    variant: '',
                    aN: question?.answers?.length + 1,
                  })
                }
              >
                <Add color="primary" fontSize="medium" />
              </AddRemoveAnswerButton>
              <AddRemoveAnswerButton
                variant="mediumOutlined"
                onClick={() => remove(question?.answers.length - 1)}
              >
                <Remove color="primary" fontSize="medium" />
              </AddRemoveAnswerButton>
            </ButtonsWrapper>
          </>
        )}
      </FieldArray>
    </RadioButtonBox>
  </QuestionWrapper>
);

export default QuestionItem;
