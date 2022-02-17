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

const TestResult: React.FC<ITestResult> = ({ isFailed, skills }) => (
  <AuthorizedLayout pageName="Test Result">
    <TestResultBox>
      <TestResultTitle>Your Score</TestResultTitle>
      <ContentBox>
        <ProgressBarBox>
          {isFailed ? (
            <ProgressBar size="xlarge" value={35} text="35%" variant="failed" />
          ) : (
            <ProgressBar size="xlarge" value={75} text="75%" variant="completed" />
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
                  {skills?.map((skillItem) => (
                    <CourseMaterialInfoContainer skillItem={skillItem} key={skillItem.name} />
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
