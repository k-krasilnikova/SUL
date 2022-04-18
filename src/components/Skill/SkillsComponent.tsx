import { FC, Suspense } from 'react';

import Loader from 'components/Loader';
import SkillItem from 'components/Skill/SkillItem';

import { LENGTHS } from 'constants/sizes';
import { SkillsList } from 'types/skill';

import { Box } from '@mui/material';
import { SkillsTitle, SkillsBox, SkillsDivider } from './styled';

interface ISkillsComponentProps {
  skills: SkillsList[];
  skillFounded: SkillsList[];
}

const SkillsComponent: FC<ISkillsComponentProps> = ({ skillFounded, skills }) => {
  const skillsData = skillFounded.length ? skillFounded : skills;
  return (
    <Box>
      {skillsData?.map((SkillGroup, key) => (
        <Suspense fallback={<Loader color="primary" type="component" />}>
          <SkillsTitle>{SkillGroup.name}</SkillsTitle>
          <SkillsBox>
            {SkillGroup.skills.map((Skill) => (
              <SkillItem name={Skill.name} skillImage={Skill.image} />
            ))}
          </SkillsBox>
          {key < skillsData.length + LENGTHS.lastArrayItem && <SkillsDivider />}
        </Suspense>
      ))}
    </Box>
  );
};
export default SkillsComponent;
