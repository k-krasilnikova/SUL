import React from 'react';
import { RadioGroup } from '@mui/material';

import { checkbox, checkboxChecked } from 'icons';
import { IQuestionProps } from 'types/test';

import {
  AnswersBox,
  QuestionAndStageBox,
  QuestionItemBox,
  Stage,
  StageWrapper,
  StyledFormControlLabel,
  StyledRadio,
  TestQuestion,
} from './styled';

const QuestionItem: React.FC<IQuestionProps> = ({
  questionItem,
  stage,
  maxStage,
  handleChange,
  value,
}) => (
  <QuestionItemBox>
    <QuestionAndStageBox>
      {questionItem && <TestQuestion>{questionItem.question}</TestQuestion>}
      <StageWrapper>
        <Stage>
          {stage}/{maxStage}
        </Stage>
      </StageWrapper>
    </QuestionAndStageBox>
    <AnswersBox>
      {questionItem.answers.map((answer) => (
        <RadioGroup
          key={answer.aN}
          value={value[questionItem.qN] || null}
          onChange={handleChange(questionItem.qN)}
        >
          <StyledFormControlLabel
            control={
              <StyledRadio
                icon={<img src={checkbox} alt="checkbox" />}
                checkedIcon={<img src={checkboxChecked} alt="checkboxChecked" />}
                value={answer.aN}
              />
            }
            label={answer.variant}
          />
        </RadioGroup>
      ))}
    </AnswersBox>
  </QuestionItemBox>
);

export default QuestionItem;
