import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import NoContent from 'components/NoContent';
import { ButtonLabels } from 'constants/ButtonLabels';
import { NO_CONTENT } from 'constants/messages';
import { Loaders } from 'enums/loader';

import { BackButton, InnerWrapper, PassingTestWrapper } from './styled';
import QuestionItem from './QuestionItem';
import TestButtons from './TestButtons';
import TestTitleAndTimer from './TestTitleAndTimer';
import { IPassingTestProps } from './types';

const PassingTest: React.FC<IPassingTestProps> = ({
  stage,
  maxStage,
  handleChange,
  value,
  resultEnabled,
  stageNext,
  stageBack,
  testItem,
  isLoading,
  questionStageItem,
  handleSubmitResult,
  handleNavigateBack,
}) => (
  <AuthorizedLayout pageName="Passing Test">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
    ) : testItem ? (
      <PassingTestWrapper>
        <InnerWrapper>
          <BackButton variant="medium" onClick={handleNavigateBack}>
            {ButtonLabels.back}
          </BackButton>
          <TestTitleAndTimer testItem={testItem} />
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
