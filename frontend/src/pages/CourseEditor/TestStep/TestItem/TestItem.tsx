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
  ButtonBox,
  QuestionActionButton,
  InputText,
  TestBasicField,
  InputSelect,
} from './styled';

const TestItem: FC<ITestItemProps> = ({ formik, handleChangeAnswer, isCurrentAnswer }) => (
  <TestItemWrapper>
    <form>
      <TestItemTitle>{Titles.testDetails}</TestItemTitle>
      <TestTitleBox>
        <TestBasicField label="Title" value={formik.values.testTitle} variant="outlined" />
        <TestBasicField label="Duration" value={formik.values.testDuration} variant="outlined" />
      </TestTitleBox>
      <QuestionWrapper>
        <QuestionTitle>Question № 1</QuestionTitle>
        <QuestionInputBox>
          <InputText value="Question" aria-label="Question" />
          <InputSelect disabled>
            <option>Answer Option</option>
          </InputSelect>
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
        <ButtonBox>
          <QuestionActionButton type="button">Remove question</QuestionActionButton>
        </ButtonBox>
      </QuestionWrapper>
    </form>
  </TestItemWrapper>
);

export default TestItem;
