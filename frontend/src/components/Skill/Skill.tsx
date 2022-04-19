import { FC, Suspense } from 'react';
import { Box } from '@mui/material';

import { SkillsList } from 'types/skill';
import { LENGTH } from 'constants/sizes';
import Loader from 'components/Loader';
import SkillItem from './SkillItem/SkillItem';
import { SkillsTitle, SkillsBox, SkillsDivider } from './styled';

interface ISkillProps {
  skills: SkillsList[];
  skillFounded: SkillsList[];
}

const Skill: FC<ISkillProps> = ({ skillFounded, skills }) => {
  const skillsData = skillFounded.length ? skillFounded : skills;
  return (
    <Box>
      {skillsData?.map((skillGroup, key) => {
        const isDividerVisible = key < skillsData.length + LENGTH.lastArrayItem;
        return (
          <Suspense
            key={`${skillGroup.name}`}
            fallback={<Loader color="primary" type="component" />}
          >
            <SkillsTitle>{skillGroup.name}</SkillsTitle>
            <SkillsBox>
              {skillGroup.skills.map((skill) => (
                <SkillItem key={`${skill.name}`} name={skill.name} skillImage={skill.image} />
              ))}
            </SkillsBox>
            {isDividerVisible && <SkillsDivider />}
          </Suspense>
        );
      })}
    </Box>
  );
};
export default Skill;
