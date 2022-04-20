import React from 'react';
import { RadioGroup } from '@mui/material';

import { checkbox, checkboxChecked } from 'icons';

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
import { IQuestionProps } from './types';

const QuestionItem: React.FC<IQuestionProps> = ({
  questionStageItem,
  stage,
  maxStage,
  handleChange,
  value,
}) => (
  <QuestionItemBox>
    <QuestionAndStageBox>
      {questionStageItem && <TestQuestion>{questionStageItem.question}</TestQuestion>}
      <StageWrapper>
        <Stage>
          {stage}/{maxStage}
        </Stage>
      </StageWrapper>
    </QuestionAndStageBox>
    <AnswersBox>
      {questionStageItem.answers.map((answer) => (
        <RadioGroup
          key={answer.aN}
          value={value[questionStageItem.qN] || null}
          onChange={handleChange(questionStageItem.qN)}
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
