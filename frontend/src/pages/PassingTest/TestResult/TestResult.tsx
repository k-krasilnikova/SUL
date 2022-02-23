import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { AuthorizedLayout } from 'components/Layout';
import { ITestResult } from 'types/test';
import CourseMaterialInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';

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
} from './styled';

const TestResult: React.FC<ITestResult> = ({ isFailed, responseData, percentageValue }) => (
  <AuthorizedLayout pageName="Test Result">
    <TestResultBox>
      <TestResultTitle>Your Score</TestResultTitle>
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
            {isFailed ? 'Course failed' : 'Course successfully completed'}
          </TestResultText>
          <AboutSkillsBox>
            <SkillsText>Acquired skills:</SkillsText>
            <TestSkillsBox>
              {isFailed ? (
                <>
                  <FailedCourseText>None</FailedCourseText>
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
        <SubmitButton variant="medium">Submit</SubmitButton>
      </ButtonBox>
    </TestResultBox>
  </AuthorizedLayout>
);

export default TestResult;
