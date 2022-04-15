import React, { Suspense } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import SkillItem from 'components/Skill';
import { NoContent } from 'components/NoContent';

import { LOADER } from 'constants/loaderTypes';
import { NO_SKILLS } from 'constants/messages';

import { ISkills } from 'types/skill';
import { ResponseDataType } from 'types/responseData';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@mui/icons-material';
import {
  SkillsPageContainer,
  SearchSkill,
  SearchWrapper,
  SkillsWrapper,
  SkillsBox,
  SkillsTitle,
  StyledDivider,
} from './styled';

export interface IProps {
  searchSkillInList: (value: string) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (value: string) => void;
  searchSkill: string;
}

type SkillsPageProps = ISkills & IProps & ResponseDataType;

const Skills: React.FC<SkillsPageProps> = ({
  skills,
  isLoading,
  checkSpace,
  searchSkillInList,
  checkPastedValue,
  searchSkill,
}) => {
  return (
    <AuthorizedLayout pageName="Skills">
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
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
                onKeyDown={(event) => {
                  checkSpace(event);
                }}
                onChange={(event) => {
                  searchSkillInList(event.target.value);
                }}
                onPaste={(event) => {
                  event.preventDefault();
                  checkPastedValue(event.clipboardData.getData('Text'));
                }}
                value={searchSkill}
              />
              <StyledDivider />
            </SearchWrapper>
            {skills?.map((SkillGroup) => (
              <Suspense fallback={<Loader color="primary" type={LOADER.component} />}>
                <SkillsTitle>{SkillGroup.name}</SkillsTitle>
                <SkillsBox>
                  {SkillGroup.skills.map((Skill) => (
                    <SkillItem name={Skill.name} skillImage={Skill.image} />
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
