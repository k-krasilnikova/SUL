import React from 'react';
import { Link } from 'react-router-dom';

import Loader from 'components/Loader';
import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { TEST_RESULT_TEXT } from 'constants/test';
import { ITestResult } from 'types/test';
import transformRoute from 'utils/helpers/paths/transformRoute';

import {
  ButtonBox,
  ContentBox,
  SubmitButton,
  TestResultBox,
  TestResultTitle,
  TitleBox,
} from './styled';
import ResultProgressBar from './ResultProgressBar';
import ResultDescription from './ResultDescription';

const TestResult: React.FC<ITestResult> = ({
  assessment,
  isLoading,
  isFailed,
  responseData,
  percentageValue,
  courseId,
}) => (
  <AuthorizedLayout pageName="Test Result">
    {isLoading ? (
      <Loader color="primary" type="component" />
    ) : (
      <TestResultBox>
        <TitleBox>
          <TestResultTitle>{TEST_RESULT_TEXT.score}</TestResultTitle>
        </TitleBox>
        <ContentBox>
          <ResultProgressBar percentageValue={percentageValue} isFailed={isFailed} />
          <ResultDescription
            isFailed={isFailed}
            assessment={assessment}
            responseData={responseData}
          />
        </ContentBox>
        <ButtonBox>
          <Link to={transformRoute(PATHS.myCourseDetails, courseId)}>
            <SubmitButton variant="medium">{ButtonLabels.submit}</SubmitButton>
          </Link>
        </ButtonBox>
      </TestResultBox>
    )}
  </AuthorizedLayout>
);

export default TestResult;
