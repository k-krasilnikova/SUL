import { FC } from 'react';

import SkillItem from './SkillItem';
import { TSkillGroupProps } from '../types';
import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider } from './styled';

const SkillGroup: FC<TSkillGroupProps> = ({ skillFounded }) => {
  return (
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
};

export default SkillGroup;
