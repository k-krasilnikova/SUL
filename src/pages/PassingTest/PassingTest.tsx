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
  testItem,
  isLoading,
  handleNavigateBack,
  ...props
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
        <QuestionItem {...props} />
        <TestButtons {...props} />
      </PassingTestWrapper>
    ) : (
      <NoContent message={NO_CONTENT} />
    )}
  </AuthorizedLayout>
);

export default PassingTest;
