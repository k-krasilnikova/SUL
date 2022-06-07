import { FC } from 'react';

import { NO_SKILLS } from 'constants/messages';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';
import { Loaders } from 'enums/loader';

import SkillGroup from './SkillGroup';
import { ISkillsPageProps } from './types';
import {
  SkillsPageContainer,
  SearchSkill,
  SearchWrapper,
  SkillsWrapper,
  StyledDivider,
} from './styled';

const Skills: FC<ISkillsPageProps> = ({
  skills,
  skillFounded,
  searchInputValue,
  handleSearchInputChange,
  isLoading,
}) => (
  <PageTitle title="Skills">
    {isLoading ? (
      <Loader type={Loaders.content} />
    ) : skills?.length ? (
      <SkillsPageContainer container>
        <SkillsWrapper>
          <SearchWrapper>
            <SearchSkill onChange={handleSearchInputChange} value={searchInputValue} />
            <StyledDivider />
          </SearchWrapper>
          <SkillGroup skillFounded={skillFounded} skills={skills} />
        </SkillsWrapper>
      </SkillsPageContainer>
    ) : (
      <NoContent message={NO_SKILLS} />
    )}
  </PageTitle>
);

export default Skills;
