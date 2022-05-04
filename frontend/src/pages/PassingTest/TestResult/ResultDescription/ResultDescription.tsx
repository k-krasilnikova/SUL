import React from 'react';

import { TEST_RESULT_TEXT } from 'constants/test';
import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { IResultDescription } from 'types/test';

import {
  AboutSkillsBox,
  FailedCourseText,
  ResultBox,
  SkillsInfoList,
  SkillsText,
  StyledDivider,
  TestResultText,
  TestSkillsBox,
} from './styled';

const ResultDescription: React.FC<IResultDescription> = ({
  isFailed,
  assessment,
  responseData,
}) => (
  <ResultBox>
    <TestResultText>
      {isFailed ? TEST_RESULT_TEXT.failed : TEST_RESULT_TEXT.completed}
    </TestResultText>
    <AboutSkillsBox>
      <SkillsText>
        {assessment ? TEST_RESULT_TEXT.skillsToBeApproved : TEST_RESULT_TEXT.skills}
      </SkillsText>
      <TestSkillsBox>
        {isFailed ? (
          <>
            <FailedCourseText>{TEST_RESULT_TEXT.none}</FailedCourseText>
            <StyledDivider />
          </>
        ) : (
          <SkillsInfoList>
            {assessment ? (
              responseData?.techsToAchieve?.map((tech) => (
                <SkillInfoContainer key={tech} skillItem={tech} />
              ))
            ) : (
              <>
                {responseData?.newSkills?.map((newSkillItem) => (
                  <SkillInfoContainer key={newSkillItem} skillItem={newSkillItem} />
                ))}
                {responseData?.updatedSkills?.map((updatedSkillItem) => (
                  <SkillInfoContainer key={updatedSkillItem} skillItem={updatedSkillItem} />
                ))}
              </>
            )}
          </SkillsInfoList>
        )}
      </TestSkillsBox>
    </AboutSkillsBox>
  </ResultBox>
);

export default ResultDescription;
