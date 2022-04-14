import React from 'react';

import { useGetSkills } from 'api/skills';

import SkillsContent from './Skills';

const AllSkills: React.FC = () => {
  const { data } = useGetSkills();

  // eslint-disable-next-line no-console
  console.log(data, 'data in skill container');

  return <SkillsContent />;
};

export default AllSkills;
