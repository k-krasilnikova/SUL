import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import NoContent from 'components/NoContent';
import { ButtonLabels } from 'constants/ButtonLabels';
import { NO_CONTENT } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { IPassingTestProps } from 'types/test';

import { BackButton, InnerWrapper, PassingTestWrapper } from './styled';
import QuestionItem from './QuestionItem';
import TestButtons from './TestButtons';
import TestTitleAndTimer from './TestTitleAndTimer';

const PassingTest: React.FC<IPassingTestProps> = ({
  stage,
  maxStage,
  handleChange,
  value,
  resultEnabled,
  stageNext,
  stageBack,
  testTitle,
  testDuration,
  isLoading,
  questionStageItem,
  handleSubmitResult,
  handleBackButtonClick,
}) => (
  <AuthorizedLayout pageName="Passing Test">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : testTitle ? (
      <PassingTestWrapper>
        <InnerWrapper>
          <BackButton variant="medium" onClick={handleBackButtonClick}>
            {ButtonLabels.back}
          </BackButton>
          <TestTitleAndTimer title={testTitle} duration={testDuration} />
        </InnerWrapper>
        <QuestionItem
          questionItem={questionStageItem}
          stage={stage}
          maxStage={maxStage}
          handleChange={handleChange}
          value={value}
        />
        <TestButtons
          stage={stage}
          stageBack={stageBack}
          stageNext={stageNext}
          resultEnabled={resultEnabled}
          questionStageItem={questionStageItem}
          value={value}
          handleSubmitResult={handleSubmitResult}
        />
      </PassingTestWrapper>
    ) : (
      <NoContent message={NO_CONTENT} />
    )}
  </AuthorizedLayout>
);

export default PassingTest;
