import React from 'react';
import { Box } from '@mui/system';
import { RadioGroup } from '@mui/material';

import { checkbox, checkboxChecked } from 'icons';
import { IQuestionItem } from 'types/test';

import {
  AnswersBox,
  QuestionAndStageBox,
  Stage,
  StageWrapper,
  StyledFormControlLabel,
  StyledRadio,
  TestQuestion,
} from './styled';

const QuestionItem: React.FC<IQuestionItem> = ({
  questionItem,
  stage,
  maxStage,
  handleChange,
  value,
}) => (
  <Box>
    <QuestionAndStageBox>
      <TestQuestion>{questionItem ? questionItem.question : null}</TestQuestion>
      <StageWrapper>
        <Stage>
          {stage}/{maxStage}
        </Stage>
      </StageWrapper>
    </QuestionAndStageBox>
    <AnswersBox>
      {questionItem?.answers.map((answer) => (
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
  </Box>
);

export default QuestionItem;
