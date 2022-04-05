import React from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import Loader from 'components/Loader';
import { AuthorizedLayout } from 'components/Layout';
import { ITestResult } from 'types/test';
import CourseMaterialInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import {
  AboutSkillsBox,
  ButtonBox,
  ContentBox,
  FailedCourseText,
  ProgressBarBox,
  ResultBox,
  SkillsInfoList,
  SkillsText,
  StyledDivider,
  SubmitButton,
  TestResultBox,
  TestResultText,
  TestResultTitle,
  TestSkillsBox,
  TitleBox,
} from './styled';

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
          <TestResultTitle>Your Score</TestResultTitle>
        </TitleBox>
        <ContentBox>
          <ProgressBarBox>
            {isFailed ? (
              <ProgressBar
                size="xlarge"
                value={percentageValue}
                text={`${percentageValue}%`}
                variant="failed"
              />
            ) : (
              <ProgressBar
                size="xlarge"
                value={percentageValue}
                text={`${percentageValue}%`}
                variant="completed"
              />
            )}
          </ProgressBarBox>
          <ResultBox>
            <TestResultText>
              {isFailed ? 'Test failed' : 'Test successfully completed'}
            </TestResultText>
            <AboutSkillsBox>
              <SkillsText>Acquired skills:</SkillsText>
              <TestSkillsBox>
                {isFailed || assessment ? (
                  <>
                    <FailedCourseText>None</FailedCourseText>
                    {assessment && <FailedCourseText>Assessment arranged</FailedCourseText>}
                    <StyledDivider />
                  </>
                ) : (
                  <SkillsInfoList>
                    {responseData?.newSkills?.map((newSkillItem) => (
                      <CourseMaterialInfoContainer skillItem={newSkillItem} key={newSkillItem} />
                    ))}
                    {responseData?.updatedSkills?.map((updatedSkillItem) => (
                      <CourseMaterialInfoContainer
                        skillItem={updatedSkillItem}
                        key={updatedSkillItem}
                      />
                    ))}
                  </SkillsInfoList>
                )}
              </TestSkillsBox>
            </AboutSkillsBox>
          </ResultBox>
        </ContentBox>
        <ButtonBox>
          <Link to={transformRoute(PATHS.myCourseDetails, courseId)}>
            <SubmitButton variant="medium">Submit</SubmitButton>
          </Link>
        </ButtonBox>
      </TestResultBox>
    )}
  </AuthorizedLayout>
);

export default TestResult;
