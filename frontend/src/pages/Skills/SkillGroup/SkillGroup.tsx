import { FC, memo } from 'react';

import NoContent from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';

import { SkillsGroupWrapper, SkillsTitle, SkillsBox, SkillsDivider } from './styled';
import SkillItem from './SkillItem';
import { TSkillGroupProps } from '../types';

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
      <NoContent message={NO_SKILLS} />
    )}
  </>
);

export default memo(SkillGroup);
