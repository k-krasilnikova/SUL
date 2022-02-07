import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { AuthorizedLayout } from 'components/Layout';
import CourseMaterialInfo from 'pages/Profile/UserSkills/SkillInfo';
import { ITestResult } from 'types/test';

import {
  AboutSkillsBox,
  ButtonBox,
  ContentBox,
  FailedCourseText,
  ProgressBarBox,
  ResultBox,
  SkillsText,
  StyledDivider,
  SubmitButton,
  TestResultBox,
  TestResultText,
  TestResultTitle,
  TestSkillsBox,
} from './styled';

const TestResult: React.FC<ITestResult> = ({ isFailed }) => (
  <AuthorizedLayout pageName="Test Result">
    <TestResultBox>
      <TestResultTitle>Your Score</TestResultTitle>
      <ContentBox>
        <ProgressBarBox>
          {isFailed ? (
            <ProgressBar
              size="xlarge"
              value={35}
              text="35%"
              color="#D43E41"
              textColor="#000000"
              trailColor="#eaeaea"
            />
          ) : (
            <ProgressBar
              size="xlarge"
              value={75}
              text="75%"
              color="#1CC02C"
              textColor="#000000"
              trailColor="#eaeaea"
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
                <>
                  <CourseMaterialInfo
                    technologyTitle="Nest.js"
                    progress={100}
                    stages={2}
                    stagesCompleted={2}
                  />
                  <CourseMaterialInfo
                    technologyTitle="Express.js"
                    progress={100}
                    stages={2}
                    stagesCompleted={2}
                  />
                </>
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
