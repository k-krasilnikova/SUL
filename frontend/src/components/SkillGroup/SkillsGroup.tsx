import { FC } from 'react';

import SkillItem from './SkillItem';
import { ISkillsGroupProps } from './types';
import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider } from './styled';

const SkillsGroup: FC<ISkillsGroupProps> = ({ skillFounded, skills }) => {
  const skillsData = skillFounded.length ? skillFounded : skills;
  return (
    <>
      {skillsData?.map(({ name: skillsGroupName, skills: skillsGroupSkills }) => (
        <SkillsGroupWrapper key={skillsGroupName}>
          <SkillsTitle>{skillsGroupName}</SkillsTitle>
          <SkillsBox>
            {skillsGroupSkills.map(({ name: skillName, image: skillImage }) => (
              <SkillItem key={skillName} name={skillName} skillImage={skillImage} />
            ))}
          </SkillsBox>
          <SkillsDivider />
        </SkillsGroupWrapper>
      ))}
    </>
  );
};
export default SkillsGroup;
