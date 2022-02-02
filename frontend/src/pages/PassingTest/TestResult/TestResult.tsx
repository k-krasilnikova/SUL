import React from 'react';

import AuthorizedLayout from 'components/Layout/AuthorizedLayout';
import ProgressBar from 'components/ProgressBar/ProgressBar';
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
              trailColor="linear-gradient(90deg, #75c275 60.72%, #e26c5a 100%)"
            />
          ) : (
            <ProgressBar
              size="xlarge"
              value={75}
              text="75%"
              color="#1CC02C"
              textColor="#000000"
              trailColor="linear-gradient(90deg, #75c275 60.72%, #e26c5a 100%)"
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
                <FailedCourseText>None</FailedCourseText>
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
