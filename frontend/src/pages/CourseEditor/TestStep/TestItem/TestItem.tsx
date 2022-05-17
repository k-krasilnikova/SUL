import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ITestItemProps } from 'pages/CourseEditor/types';

import {
  TestItemWrapper,
  TestItemTitle,
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
  FieldSelect,
} from './styled';

const TestItem: FC<ITestItemProps> = ({ formik, handleChangeAnswer, isCurrentAnswer }) => (
  <TestItemWrapper>
    <TestItemTitle>{Titles.testDetails}</TestItemTitle>
    <TestTitleBox>
      <TestBasicField label="Title" value={formik.values.testTitle} variant="outlined" />
      <TestBasicField label="Duration" value={formik.values.testDuration} variant="outlined" />
    </TestTitleBox>
    <QuestionWrapper>
      <QuestionTitle>{Titles.questionCount}</QuestionTitle>
      <QuestionInputBox>
        <InputText value="Question" aria-label="Question" />
        <FieldSelect disabled>
          <option>{Titles.answerTestOption}</option>
        </FieldSelect>
      </QuestionInputBox>
      <RadioButtonWrapper
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Answer"
        name="radio-buttons-group"
      >
        <RadioButtonBox>
          <RadioSelectAnswer name="Answer" value="Answer" disableRipple />
          <InputAnswer value="Answer" />
        </RadioButtonBox>
        <RadioButtonBox>
          <RadioSelectAnswer
            name="Answer 1"
            value={formik.values.testAnswer}
            disableRipple
            id="testAnswer"
          />
          <InputAnswer value={isCurrentAnswer} onChange={handleChangeAnswer} />
        </RadioButtonBox>
      </RadioButtonWrapper>
    </QuestionWrapper>
  </TestItemWrapper>
);

export default TestItem;
