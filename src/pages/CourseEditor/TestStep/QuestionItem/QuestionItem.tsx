/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';
import { MenuItem, RadioGroup, Alert } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { BUTTON_VARIANT, EditorTitles, MAX_QUESTION_LENGTH } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { IQuestionItemProps } from 'pages/CourseEditor/types';
import { Field, InputLengthCounter } from 'pages/CourseEditor/DefinitionStep/styled';
import { MaterialFieldWrapper as FieldWrapper } from 'pages/CourseEditor/LessonsStep/LessonItem/styled';

import {
  AddAnswerButton,
  QuestionWrapper,
  QuestionTitle,
  QuestionInputBox,
  RadioSelectAnswer,
  RadioControlLabel,
  InputAnswer,
  InputText,
  ButtonsWrapper,
} from './styled';
import { AlertWrapper } from '../styled';

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
      <FieldWrapper>
        <InputText
          placeholder="Question title"
          value={question?.question}
          id={`questions[${index}].question`}
          name={`test.questions[${index}].question`}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          autoComplete="off"
          inputProps={{
            maxLength: MAX_QUESTION_LENGTH,
          }}
          error={
            formik.touched.test?.questions[index]?.question &&
            Boolean(formik.errors?.test?.questions[index]?.question)
          }
          helperText={
            formik.touched.test?.questions[index]?.question &&
            formik.errors?.test?.questions[index]?.question
          }
        />
        <InputLengthCounter>{`${question?.question.length}/${MAX_QUESTION_LENGTH}`}</InputLengthCounter>
      </FieldWrapper>
      <Field select disabled value="radio" onChange={formik.handleChange}>
        <MenuItem value="input">{BUTTON_VARIANT.input}</MenuItem>
        <MenuItem value="radio">{BUTTON_VARIANT.radio}</MenuItem>
      </Field>
    </QuestionInputBox>
    <RadioGroup
      name={`test.questions[${index}].correctAnswer`}
      value={question.correctAnswer}
      onChange={handleChangeCorrectAnswer}
    >
      <FieldArray name={`test.questions[${index}].answers`}>
        {({ push, remove }) => (
          <>
            {question?.answers?.map((answer, key) => (
              <RadioControlLabel
                key={key}
                value={answer.aN}
                control={<RadioSelectAnswer color="primary" />}
                label={
                  <InputAnswer
                    placeholder="Answer"
                    variant="standard"
                    value={answer.variant}
                    id={`test.questions[${index}].answers[${key}].variant`}
                    name={`test.questions[${index}].answers[${key}].variant`}
                    onChange={formik.handleChange}
                    onBlur={onFieldBlur}
                    autoComplete="off"
                    error={
                      formik.touched.test?.questions[index]?.answers?.[key]?.variant &&
                      Boolean(formik.errors?.test?.questions[index]?.answers?.[key]?.variant)
                    }
                    helperText={
                      formik.touched.test?.questions[index]?.answers?.[key]?.variant &&
                      formik.errors?.test?.questions[index]?.answers?.[key]?.variant
                    }
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
              <AddAnswerButton
                variant="mediumOutlined"
                disabled={formik.errors.test?.questions[index]?.answers}
                onClick={() => remove(index)}
              >
                <Remove color="primary" fontSize="medium" />
              </AddAnswerButton>
            </ButtonsWrapper>
          </>
        )}
      </FieldArray>
      <AlertWrapper>
        {typeof formik.errors?.test?.questions[index]?.answers === 'string' && (
          <Alert severity="error">{formik.errors?.test?.questions[index]?.answers}</Alert>
        )}
      </AlertWrapper>
    </RadioGroup>
  </QuestionWrapper>
);

export default QuestionItem;
