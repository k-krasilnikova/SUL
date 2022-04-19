import { FC, ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import { InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import Skill from 'components/Skill';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { ISkills, SkillsList } from 'types/skill';
import {
  SkillsPageContainer,
  SearchSkill,
  SearchWrapper,
  SkillsWrapper,
  StyledDivider,
} from './styled';

export interface ISkillsPageProps extends ISkills {
  isLoading?: boolean;
  searchInputValue: string;
  searchSkills: (event: ChangeEvent<HTMLInputElement>) => void;
  checkSpace: (event: KeyboardEvent) => void;
  checkPastedValue: (event: ClipboardEvent) => void;
  skillFounded: SkillsList[];
}

const SkillsCatalog: FC<ISkillsPageProps> = ({
  skills,
  isLoading,
  searchSkills,
  searchInputValue,
  checkSpace,
  checkPastedValue,
  skillFounded,
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
              onChange={searchSkills}
              value={searchInputValue}
              onKeyDown={checkSpace}
              onPaste={checkPastedValue}
            />
            <StyledDivider />
          </SearchWrapper>
          <Skill skillFounded={skillFounded} skills={skills} />
        </SkillsWrapper>
      </SkillsPageContainer>
    ) : (
      <NoContent message={NO_SKILLS} />
    )}
  </AuthorizedLayout>
);

export default SkillsCatalog;
