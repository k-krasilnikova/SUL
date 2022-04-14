import React from 'react';

import { useGetSkills } from 'api/skills';

import Skills from './Skills';

const SkillsContainer: React.FC = () => {
  const { data: skills } = useGetSkills();

  return <Skills skills={skills} />;
};

export default SkillsContainer;
