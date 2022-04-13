import React from 'react';

import { TEST_RESULT_TEXT } from 'constants/test';
import CourseMaterialInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
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
      <SkillsText>{TEST_RESULT_TEXT.skills}</SkillsText>
      <TestSkillsBox>
        {isFailed || assessment ? (
          <>
            <FailedCourseText>{TEST_RESULT_TEXT.none}</FailedCourseText>
            {assessment && <FailedCourseText>{TEST_RESULT_TEXT.assessment}</FailedCourseText>}
            <StyledDivider />
          </>
        ) : (
          <SkillsInfoList>
            {responseData?.newSkills?.map((newSkillItem) => (
              <CourseMaterialInfoContainer skillItem={newSkillItem} key={newSkillItem} />
            ))}
            {responseData?.updatedSkills?.map((updatedSkillItem) => (
              <CourseMaterialInfoContainer skillItem={updatedSkillItem} key={updatedSkillItem} />
            ))}
          </SkillsInfoList>
        )}
      </TestSkillsBox>
    </AboutSkillsBox>
  </ResultBox>
);

export default ResultDescription;
