import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import { AuthorizedLayout } from 'components/Layout';
import { CountDownTimer } from 'components/CountDownTimer';
import { PATHS } from 'constants/routes';
import { INITIAL_TEST, MIN_STAGE } from 'constants/test';
import { IPassingTest } from 'types/test';

import {
  BackButton,
  ButtonsBox,
  CountDownText,
  CourseTestTitle,
  InnerWrapper,
  NextButton,
  PassingTestWrapper,
  PreviousButton,
  QuestionItemBox,
  ResultButton,
  TitleBox,
} from './styled';
import QuestionItem from './QuestionItem';

const PassingTest: React.FC<IPassingTest> = ({
  stage,
  maxStage,
  handleChange,
  value,
  params,
  resultEnabled,
  stageNext,
  stageBack,
  questionStageItem,
}) => (
  <AuthorizedLayout pageName="Passing Test">
    <PassingTestWrapper>
      <InnerWrapper>
        <BackButton variant="medium">Back</BackButton>
        <Box>
          <TitleBox>
            <CourseTestTitle>{INITIAL_TEST.title}</CourseTestTitle>
            <CountDownText>
              <CountDownTimer duration={INITIAL_TEST.timeout} />
            </CountDownText>
          </TitleBox>
        </Box>
      </InnerWrapper>
      <QuestionItemBox>
        <QuestionItem
          questionItem={questionStageItem}
          stage={stage}
          maxStage={maxStage}
          handleChange={handleChange}
          value={value}
        />
      </QuestionItemBox>
      <ButtonsBox>
        <Box>
          {stage > MIN_STAGE && (
            <PreviousButton variant="medium" onClick={stageBack}>
              Previous
            </PreviousButton>
          )}
        </Box>
        {resultEnabled ? (
          <ResultButton
            variant="medium"
            disabled={Boolean(!value[questionStageItem.qN])}
            component={Link}
            to={`${PATHS.myCourses}/${params.courseId}/test/result`}
          >
            Result
          </ResultButton>
        ) : (
          <NextButton
            variant="medium"
            onClick={stageNext}
            disabled={Boolean(!value[questionStageItem.qN])}
          >
            Next
          </NextButton>
        )}
      </ButtonsBox>
    </PassingTestWrapper>
  </AuthorizedLayout>
);

export default PassingTest;
