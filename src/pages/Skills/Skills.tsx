import { FC } from 'react';

import { NO_SKILLS } from 'constants/messages';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';

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
  skillFounded,
  searchInputValue,
  handleSearchInputChange,
}) => (
  <PageTitle title="Skills">
    <SkillsPageContainer container>
      <SkillsWrapper>
        <SearchWrapper>
          <SearchSkill onChange={handleSearchInputChange} value={searchInputValue} />
          <StyledDivider />
        </SearchWrapper>
        {skillFounded?.length ? (
          <SkillGroup skillFounded={skillFounded} />
        ) : (
          <NoContent message={NO_SKILLS} />
        )}
      </SkillsWrapper>
    </SkillsPageContainer>
  </PageTitle>
);

export default Skills;
