import { FC, memo } from 'react';

import NoContent from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import SkillItem from './SkillItem';
import { TSkillGroupProps } from '../types';
import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider, NoSkills } from './styled';

const SkillGroup: FC<TSkillGroupProps> = ({ skillFounded }) => (
  <>
    {skillFounded?.length ? (
      skillFounded.map(({ name: skillsGroupName, skills: skillsGroup }) => (
        <SkillsGroupWrapper key={skillsGroupName}>
          <SkillsTitle>{skillsGroupName}</SkillsTitle>
          <SkillsBox>
            {skillsGroup.map(({ name: skillName, image: skillImage }) => (
              <SkillItem key={skillName} name={skillName} skillImage={skillImage} />
            ))}
          </SkillsBox>
          <SkillsDivider />
        </SkillsGroupWrapper>
      ))
    ) : (
      <NoSkills>
        <NoContent message={NO_SKILLS} />
      </NoSkills>
    )}
  </>
);

export default memo(SkillGroup);
