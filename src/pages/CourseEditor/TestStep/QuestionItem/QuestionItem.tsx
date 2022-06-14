/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';
import { MenuItem } from '@mui/material';
import { Add } from '@mui/icons-material';

import { BUTTON_VARIANT, EditorTitles } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { IQuestionItemProps } from 'pages/CourseEditor/types';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  AddAnswerButton,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputBox,
  RadioButtonBox,
  RadioSelectAnswer,
  RadioControlLabel,
  InputAnswer,
  InputText,
  ButtonsWrapper,
} from './styled';

const QuestionItem: FC<IQuestionItemProps> = ({
  index,
  question,
  formik,
  handleChangeCorrectAnswer,
  onFieldBlur,
}) => (
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
        onBlur={onFieldBlur}
        error={Boolean(formik.errors?.test?.questions[index]?.question)}
        helperText={formik.errors?.test?.questions[index]?.question}
      />
      <Field select disabled value="radio" onChange={formik.handleChange}>
        <MenuItem value="input">{BUTTON_VARIANT.input}</MenuItem>
        <MenuItem value="radio">{BUTTON_VARIANT.radio}</MenuItem>
      </Field>
    </QuestionInputBox>
    <RadioButtonBox
      name={`test.questions[${index}].correctAnswer`}
      value={question.correctAnswer}
      onChange={handleChangeCorrectAnswer}
    >
      <FieldArray name={`test.questions[${index}].answers`}>
        {({ push }) => (
          <>
            {question?.answers?.map((answer, key) => (
              <RadioControlLabel
                key={key}
                value={answer.aN}
                control={<RadioSelectAnswer color="primary" />}
                label={
                  <InputAnswer
                    variant="standard"
                    value={answer.variant}
                    id={`test.questions[${index}].answers[${key}].variant`}
                    name={`test.questions[${index}].answers[${key}].variant`}
                    onChange={formik.handleChange}
                    onBlur={onFieldBlur}
                    error={formik.errors?.test?.questions[index]?.answers?.[key]?.variant}
                    helperText={formik.errors?.test?.questions[index]?.answers?.[key]?.variant}
                  />
                }
              />
            ))}
            <ButtonsWrapper>
              <AddAnswerButton
                variant="mediumOutlined"
                disabled={formik.errors.test?.questions[index]?.answers}
                onClick={() =>
                  push({
                    variant: '',
                    aN: question?.answers?.length + Numbers.one,
                  })
                }
              >
                <Add color="primary" fontSize="medium" />
              </AddAnswerButton>
            </ButtonsWrapper>
          </>
        )}
      </FieldArray>
    </RadioButtonBox>
  </QuestionWrapper>
);

export default QuestionItem;
