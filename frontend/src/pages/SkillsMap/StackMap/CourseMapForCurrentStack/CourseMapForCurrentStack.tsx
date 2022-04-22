import { FC } from 'react';

import { ICourseMapForCurrentStackProps } from 'pages/SkillsMap/types';

import { getRankNameByRankId } from './utils';
import Courses from './CoursesList';
import { Rank, RankTitle, CoursesWrapper } from './styled';

const CourseMapForCurrentStack: FC<ICourseMapForCurrentStackProps> = ({
  courseMapForCurrentStack,
  isPrimaryStack,
  userRank,
}) => (
  <>
    {courseMapForCurrentStack.map(({ rank, courses }) => (
      <Rank key={rank} selected={rank === userRank && isPrimaryStack}>
        <RankTitle>{getRankNameByRankId(rank)}</RankTitle>
        <CoursesWrapper>
          <Courses courses={courses} />
        </CoursesWrapper>
      </Rank>
    ))}
  </>
);

export default CourseMapForCurrentStack;
