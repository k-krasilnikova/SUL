import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import CoursePlate from 'components/CoursePlate';
import { RANKS, SKILLS_MAP } from 'constants/skillsMap';

import { SkillsWrapper, Position, Map, Rank, RankTitle, Courses } from './styled';

const SkillsMap: React.FC = () => (
  <AuthorizedLayout pageName="Skills Map">
    <SkillsWrapper>
      <Position>{SKILLS_MAP.position}</Position>
      <Map>
        {RANKS.map((rank) => (
          <Rank selected={rank.selected} key={rank.title}>
            <RankTitle>{`${rank.title} ${SKILLS_MAP.rank} `}</RankTitle>
            <Courses>
              {rank?.courses.map((course) => (
                <CoursePlate key={course.title} course={course} />
              ))}
            </Courses>
          </Rank>
        ))}
      </Map>
    </SkillsWrapper>
  </AuthorizedLayout>
);

export default SkillsMap;
