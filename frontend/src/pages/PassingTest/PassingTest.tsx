import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import { AuthorizedLayout } from 'components/Layout';
import { CountDownTimer } from 'components/CountDownTimer';
import Loader from 'components/Loader';
import { NoContent } from 'components/NoContent';
import { NO_CONTENT } from 'constants/messages';
import { PATHS } from 'constants/routes';
import { MIN_STAGE } from 'constants/test';
import { LOADER } from 'constants/loaderTypes';
import { IPassingTestProps } from 'types/test';

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

const PassingTest: React.FC<IPassingTestProps> = ({
  stage,
  maxStage,
  handleChange,
  value,
  params,
  resultEnabled,
  stageNext,
  stageBack,
  testItem,
  isLoading,
  questionStageItem,
  handleSubmitResult,
}) => (
  <AuthorizedLayout pageName="Passing Test">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : testItem ? (
      <PassingTestWrapper>
        <InnerWrapper>
          <BackButton variant="medium">Back</BackButton>
          <Box>
            <TitleBox>
              <CourseTestTitle>{testItem?.title}</CourseTestTitle>
              <CountDownText>
                <CountDownTimer duration={testItem?.timeout} />
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
              to={`${PATHS.learnCourse}/${params.courseId}/test/result`}
              onClick={handleSubmitResult}
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
    ) : (
      <NoContent message={NO_CONTENT} />
    )}
  </AuthorizedLayout>
);

export default PassingTest;
