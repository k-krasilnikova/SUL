import React, { Suspense } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { ISkills } from 'types/skill';
import { ResponseDataType } from 'types/responseData';
import { LOADER } from 'constants/loaderTypes';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { MobileSearch } from 'components/Layout/MobileSearch';
import SkillItem from 'components/Skill';
import {
  SkillsPageContainer,
  MobileSearchWrapper,
  SkillsWrapper,
  SkillsBox,
  SkillsTitle,
} from './styled';

type SkillsPageProps = ISkills & ResponseDataType;

const Skills: React.FC<SkillsPageProps> = ({ skills, isLoading }) => {
  return (
    <AuthorizedLayout pageName="Skills">
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : skills?.length ? (
        <SkillsPageContainer container>
          <MobileSearchWrapper>
            <MobileSearch />
          </MobileSearchWrapper>
          <SkillsWrapper>
            {skills?.map((SkillGroup) => (
              <Suspense fallback={<Loader color="primary" type={LOADER.component} />}>
                <SkillsTitle>{SkillGroup.name}</SkillsTitle>
                <SkillsBox>
                  {SkillGroup.skills.map((Skill) => (
                    <SkillItem name={Skill.name} image={Skill.image} />
                  ))}
                </SkillsBox>
              </Suspense>
            ))}
          </SkillsWrapper>
        </SkillsPageContainer>
      ) : (
        <NoContent message={NO_SKILLS} />
      )}
    </AuthorizedLayout>
  );
};

export default Skills;
