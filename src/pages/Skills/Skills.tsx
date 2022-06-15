import { FC } from 'react';

import PageTitle from 'components/PageTitle';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';
import NoContent from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';

import SkillGroup from './SkillGroup';
import { ISkillsPageProps } from './types';
import {
  SkillsPageContainer,
  SearchSkill,
  SearchWrapper,
  SkillsWrapper,
  StyledDivider,
  NoSkills,
} from './styled';

const Skills: FC<ISkillsPageProps> = ({ skillFounded, handleSearchInputChange, isSkillsLoading }) =>
  isSkillsLoading ? (
    <Loader type={Loaders.content} />
  ) : (
    <PageTitle title="Skills">
      <SkillsPageContainer container>
        <SkillsWrapper>
          <SearchWrapper>
            <SearchSkill onChange={handleSearchInputChange} />
            <StyledDivider />
          </SearchWrapper>
          {skillFounded?.length ? (
            <SkillGroup skillFounded={skillFounded} />
          ) : (
            <NoSkills>
              <NoContent message={NO_SKILLS} />
            </NoSkills>
          )}
        </SkillsWrapper>
      </SkillsPageContainer>
    </PageTitle>
  );

export default Skills;
