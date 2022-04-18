import { FC, Suspense } from 'react';

import Loader from 'components/Loader';
import SkillItem from 'components/Skill/SkillItem/SkillItem';
import { LENGTH } from 'constants/sizes';
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
export default SkillsComponent;
