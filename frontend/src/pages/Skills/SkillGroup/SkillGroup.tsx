import { FC, memo } from 'react';

import { TSkillGroupProps } from 'pages/Skills/types';

import SkillItem from './SkillItem';
import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider } from './styled';

const SkillGroup: FC<TSkillGroupProps> = ({ skillFounded }) => (
  <>
    {skillFounded?.map(({ name: skillsGroupName, skills: skillsGroup }) => (
      <SkillsGroupWrapper key={skillsGroupName}>
        <SkillsTitle>{skillsGroupName}</SkillsTitle>
        <SkillsBox>
          {skillsGroup.map(({ name: skillName, image: skillImage }) => (
            <SkillItem key={skillName} name={skillName} skillImage={skillImage} />
          ))}
        </SkillsBox>
        <SkillsDivider />
      </SkillsGroupWrapper>
    ))}
  </>
);

export default memo(SkillGroup);
