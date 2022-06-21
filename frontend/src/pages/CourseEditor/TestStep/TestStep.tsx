/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { FieldArray } from 'formik';
import { Alert } from '@mui/material';

import Loader from 'components/Loader';
import { EditorTitles } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';
import { IStepProps } from 'pages/CourseEditor/types';
import { FormWrapper, SectionName } from 'pages/CourseEditor/styled';
import isLastElem from 'utils/helpers/arrays/isLastElem';
import { ButtonsBox, SkillButton } from 'pages/CourseEditor/SkillsStep/styled';
import { ButtonLabels } from 'constants/ButtonLabels';

import QuestionItem from './QuestionItem';
import { ItemTitle, TestBasicField, TestItemWrapper, TestTitleBox } from './QuestionItem/styled';
import { AlertWrapper, TestStepWrapper } from './styled';
import { convertSecondsToString } from '../utils';

const TestStep: FC<IStepProps> = ({
  formik,
  isCourseDataLoading,
  handleChangeDuration,
  ...props
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
            placeholder="Test title"
            label="Title"
            value={formik.values?.test?.title}
            id="test.title"
            variant="outlined"
            onChange={formik.handleChange}
            autoComplete="off"
            name="test.title"
            error={Boolean(formik.errors?.test?.title)}
            helperText={formik.errors?.test?.title}
          />
          <TestBasicField
            label="Duration"
            type="time"
            value={convertSecondsToString(formik.values.test.timeout)}
            id="test.timeout"
            variant="outlined"
            name="test.timeout"
            onChange={handleChangeDuration}
          />
        </TestTitleBox>
        <FieldArray name="test.questions">
          {({ remove, push }) => (
            <>
              {formik.values.test?.questions?.map((question, index) => (
                <TestStepWrapper key={index}>
                  <QuestionItem formik={formik} question={question} index={index} {...props} />
                  <ButtonsBox>
                    <SkillButton
                      variant="mediumOutlined"
                      onClick={() => {
                        remove(index);
                        if (formik.values.test.questions.length === Numbers.one) {
                          push({
                            question: 'Test question',
                            answers: [
                              {
                                variant: '',
                                aN: Numbers.one,
                              },
                              {
                                variant: '',
                                aN: Numbers.two,
                              },
                            ],
                          });
                        }
                      }}
                    >
                      {ButtonLabels.removeQuestion}
                    </SkillButton>
                    {isLastElem(formik.values.test.questions, index) && (
                      <SkillButton
                        variant="mediumOutlined"
                        disabled={
                          Boolean(formik.errors?.test?.questions[index]?.question) ||
                          formik.errors?.test?.questions[index]?.answers
                        }
                        onClick={() =>
                          push({
                            question: '',
                            answers: [
                              {
                                variant: '',
                                aN: Numbers.one,
                              },
                              {
                                variant: '',
                                aN: Numbers.two,
                              },
                            ],
                          })
                        }
                      >
                        {ButtonLabels.addMoreQuestions}
                      </SkillButton>
                    )}
                  </ButtonsBox>
                </TestStepWrapper>
              ))}
            </>
          )}
        </FieldArray>
        <AlertWrapper>
          {typeof formik.errors?.test?.questions === 'string' && (
            <Alert severity="error">{formik.errors?.test?.questions}</Alert>
          )}
        </AlertWrapper>
      </TestItemWrapper>
    </FormWrapper>
  );

export default TestStep;
