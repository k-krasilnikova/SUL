import { FC } from 'react';

import PageTitle from 'components/PageTitle';
import Loader from 'components/Loader';
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
  skillFounded,
  handleSearchInputChange,
  isSkillsLoading,
}) => (
  <PageTitle title="Skills">
    <SkillsPageContainer container>
      <SkillsWrapper>
        <SearchWrapper>
          <SearchSkill onChange={handleSearchInputChange} />
          <StyledDivider />
        </SearchWrapper>
        {isSkillsLoading ? (
          <Loader type={Loaders.content} />
        ) : (
          <SkillGroup skillFounded={skillFounded} />
        )}
      </SkillsWrapper>
    </SkillsPageContainer>
  </PageTitle>
);

export default Skills;
