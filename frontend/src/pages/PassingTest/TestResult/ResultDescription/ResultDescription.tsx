import React from 'react';

import { TEST_RESULT_TEXT } from 'constants/test';
import SkillInfo from 'components/SkillInfo';
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
}) => {
  const { techsToAchieve, newSkills, updatedSkills } = responseData || {};

  return (
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
                techsToAchieve?.map(({ skill, score }) => (
                  <SkillInfo key={skill.name} skillScore={score} skill={skill} />
                ))
              ) : (
                <>
                  {newSkills?.map(({ skill, score }) => (
                    <SkillInfo key={skill.name} skillScore={score} skill={skill} />
                  ))}
                  {updatedSkills?.map(({ skill, score }) => (
                    <SkillInfo key={skill.name} skillScore={score} skill={skill} />
                  ))}
                </>
              )}
            </SkillsInfoList>
          )}
        </TestSkillsBox>
      </AboutSkillsBox>
    </ResultBox>
  );
};

export default ResultDescription;
