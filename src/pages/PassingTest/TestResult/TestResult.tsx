import { FC } from 'react';
import { Link } from 'react-router-dom';

import Loader from 'components/Loader';
import { AuthorizedLayout } from 'components/Layout';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import { TEST_RESULT_TEXT } from 'constants/test';
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
import { ITestResultPageProps } from './types';

const TestResult: FC<ITestResultPageProps> = ({
  assessment,
  isLoading,
  isFailed,
  responseData,
  courseId,
  progressBarData,
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
          <ResultProgressBar
            progressValue={progressBarData.progressValue}
            progressText={progressBarData.progressText}
            progressVariant={progressBarData.progressVariant}
          />
          <ResultDescription
            isFailed={isFailed}
            assessment={assessment}
            responseData={responseData}
          />
        </ContentBox>
        <ButtonBox>
          <SubmitButton
            variant="medium"
            component={Link}
            to={transformRoute(PATHS.myCourseDetails, courseId)}
          >
            {ButtonLabels.submit}
          </SubmitButton>
        </ButtonBox>
      </TestResultBox>
    )}
  </AuthorizedLayout>
);

export default TestResult;
