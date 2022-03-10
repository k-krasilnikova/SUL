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
        avatar:
          'https://cdn-icons.flaticon.com/png/512/1183/premium/1183672.png?token=exp=1646911212~hmac=188136175f07e1fcd2af1a1fb47e0c48',
      },
    ],
  },
  {
    title: 'Middle',
    courses: [
      {
        title: 'Deployment on AWS',
        avatar:
          'https://cdn-icons.flaticon.com/png/512/2821/premium/2821821.png?token=exp=1646911273~hmac=b9fb582787e78bc506a6396cf354185a',
      },
      {
        title: 'Payment integrations',
        avatar:
          'https://cdn-icons.flaticon.com/png/512/1052/premium/1052814.png?token=exp=1646911302~hmac=4fbb15c43cd56b59a7d3eaf34b49bb22',
      },
    ],
    selected: true,
  },
  {
    title: 'Senior',
    courses: [
      {
        title: 'Nest JS',
        avatar:
          'https://cdn-icons.flaticon.com/png/512/4494/premium/4494814.png?token=exp=1646911326~hmac=5ad6b8947ada5d502048d4c986228a17',
      },
      {
        title: 'Next JS',
        avatar: 'https://cdn-icons-png.flaticon.com/512/541/541509.png',
      },
      {
        title: 'Course for mentors',
        avatar:
          'https://cdn-icons.flaticon.com/png/512/3343/premium/3343974.png?token=exp=1646911362~hmac=1df9e3b6b198623c31307fbff9b47471',
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
