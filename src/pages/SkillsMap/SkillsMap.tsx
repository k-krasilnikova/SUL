import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import CoursePlate from 'components/CoursePlate';

import { SkillsWrapper, Position, Map, Rank, RankTitle, Courses } from './styled';

const RANKS = [
  {
    title: 'Junior',
    courses: [
      {
        title: 'JS for beginners',
        avatar: 'https://cdn-icons-png.flaticon.com/512/541/541509.png',
      },
      {
        title: 'Python for kids',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      },
      {
        title: 'React start to work',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      },
    ],
  },
  {
    title: 'Middle',
    courses: [
      {
        title: 'Deployment on AWS',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1508/1508841.png',
      },
      {
        title: 'Payment integrations',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1086/1086741.png',
      },
    ],
    selected: true,
  },
  {
    title: 'Senior',
    courses: [
      {
        title: 'Nest JS',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      },
      {
        title: 'Next JS',
        avatar: 'https://cdn-icons-png.flaticon.com/512/541/541509.png',
      },
      {
        title: 'Course for mentors',
        avatar: 'https://cdn-icons-png.flaticon.com/512/767/767388.png',
      },
    ],
  },
];

const SkillsMap: React.FC = () => (
  <AuthorizedLayout pageName="Skills Map">
    <SkillsWrapper>
      <Position>Full-stack Java Script developer</Position>
      <Map>
        {RANKS.map((rank) => (
          <Rank selected={rank.selected} key={rank.title}>
            <RankTitle>{rank.title} Rank</RankTitle>
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
