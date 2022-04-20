import { FC } from 'react';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import SkillsGroup from 'components/Skill/SkillGroup/SkillsGroup';
import NoContent from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';

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
  <AuthorizedLayout pageName="Skills">
    {isLoading ? (
      <Loader color="primary" type="content" />
    ) : skills?.length ? (
      <SkillsPageContainer container>
        <SkillsWrapper>
          <SearchWrapper>
            <SearchSkill
              disableUnderline
              placeholder="Search"
              inputProps={{ maxLength: 100 }}
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <Search color="disabled" fontSize="medium" />
                </InputAdornment>
              }
              onChange={handleSearchInputChange}
              value={searchInputValue}
            />
            <StyledDivider />
          </SearchWrapper>
          <SkillsGroup skillFounded={skillFounded} skills={skills} />
        </SkillsWrapper>
      </SkillsPageContainer>
    ) : (
      <NoContent message={NO_SKILLS} />
    )}
  </AuthorizedLayout>
);

export default Skills;
