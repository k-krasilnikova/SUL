import { FC, Suspense } from 'react';

import { LENGTH } from 'constants/sizes';
import Loader from 'components/Loader';

import { SkillsTitle, SkillsBox, SkillsDivider } from './styled';
import SkillItem from '../SkillItem/SkillItem';
import { ISkillsGroupProps } from '../types';

const SkillsGroup: FC<ISkillsGroupProps> = ({ skillFounded, skills }) => {
  const skillsData = skillFounded.length ? skillFounded : skills;
  return (
    <>
      {skillsData?.map((skillGroup, key) => {
        const isDividerVisible = key < skillsData.length + LENGTH.lastArrayItem;
        return (
          <Suspense key={skillGroup.name} fallback={<Loader color="primary" type="component" />}>
            <SkillsTitle>{skillGroup.name}</SkillsTitle>
            <SkillsBox>
              {skillGroup.skills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} skillImage={skill.image} />
              ))}
            </SkillsBox>
            {isDividerVisible && <SkillsDivider />}
          </Suspense>
        );
      })}
    </>
  );
};
export default SkillsGroup;
