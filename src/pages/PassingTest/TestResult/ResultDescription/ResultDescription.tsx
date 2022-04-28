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
                <SkillInfoContainer skillItem={tech} key={tech} />
              ))
            ) : (
              <>
                {responseData?.newSkills?.map((newSkillItem) => (
                  <SkillInfoContainer skillItem={newSkillItem} key={newSkillItem} />
                ))}
                {responseData?.updatedSkills?.map((updatedSkillItem) => (
                  <SkillInfoContainer skillItem={updatedSkillItem} key={updatedSkillItem} />
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
