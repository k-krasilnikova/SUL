import { FC } from 'react';

import SkillItemContainer from './SkillItem';
import { ISkillGroupProps } from './types';
import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider } from './styled';

const SkillGroup: FC<ISkillGroupProps> = ({ skillFounded, skills }) => {
  const skillsData = skillFounded.length ? skillFounded : skills;
  return (
    <>
      {skillsData?.map(({ name: skillsGroupName, skills: skillsGroup }) => (
        <SkillsGroupWrapper key={skillsGroupName}>
          <SkillsTitle>{skillsGroupName}</SkillsTitle>
          <SkillsBox>
            {skillsGroup.map(({ name: skillName, image: skillImage }) => (
              <SkillItemContainer key={skillName} name={skillName} skillImage={skillImage} />
            ))}
          </SkillsBox>
          <SkillsDivider />
        </SkillsGroupWrapper>
      ))}
    </>
  );
};

export default SkillGroup;
