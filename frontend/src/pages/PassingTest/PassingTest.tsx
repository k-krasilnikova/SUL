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
  testTitle,
  testDuration,
  isLoading,
  handleBackButtonClick,
  ...props
}) => (
  <AuthorizedLayout pageName="Passing Test">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
    ) : testTitle ? (
      <PassingTestWrapper>
        <InnerWrapper>
          <BackButton variant="medium" onClick={handleBackButtonClick}>
            {ButtonLabels.back}
          </BackButton>
          <TestTitleAndTimer title={testTitle} duration={testDuration} />
        </InnerWrapper>
        <QuestionItem {...props} />
        <TestButtons {...props} />
      </PassingTestWrapper>
    ) : (
      <NoContent message={NO_CONTENT} />
    )}
  </AuthorizedLayout>
);

export default PassingTest;
