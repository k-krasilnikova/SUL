import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import { SkillsBox, SkillsWrapper } from './styled';

const Skills: React.FC = () => {
  return (
    <AuthorizedLayout pageName="Skills">
      <SkillsWrapper>
        Skills should be here
        <SkillsBox>skills </SkillsBox>
      </SkillsWrapper>
    </AuthorizedLayout>
  );
};

export default Skills;
