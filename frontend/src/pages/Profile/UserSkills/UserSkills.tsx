import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { starEmpty, starContained } from 'icons';
import { GroupedSkills } from 'types/skill';
import isSkillCompleted from 'utils/helpers/isSkillCompleted';

import {
  SearchWrapper,
  SearchIcon,
  SearchSkill,
  SkillsBox,
  SkillsList,
  SkillsListItem,
  Star,
  SkillTitle,
  Title,
  SkillsInfoList,
  SkillsDivider,
  NoSkills,
} from './styled';

interface Props {
  userSkills?: GroupedSkills;
  searchSkillInList: (value: string) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (value: string) => void;
  searchSkill: string;
}

const UserSkills: React.FC<Props> = ({
  userSkills,
  searchSkillInList,
  checkSpace,
  checkPastedValue,
  searchSkill,
}) => (
  <SkillsBox>
    <SearchWrapper>
      <SearchSkill
        disableUnderline
        placeholder="Search"
        inputProps={{ maxLength: 100 }}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" />
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
      <Divider />
    </SearchWrapper>
    <SkillsList>
      {userSkills && userSkills.size ? (
        [...userSkills.keys()].map((group) => (
          <div key={group}>
            <SkillsListItem>
              <SkillTitle>
                <Title>{group || 'No group'}</Title>
              </SkillTitle>
              <SkillsInfoList>
                {userSkills.get(group)?.map((skill) => (
                  <React.Fragment key={skill.name}>
                    <Star alt="skill" src={isSkillCompleted(skill) ? starContained : starEmpty} />
                    <SkillInfoContainer skillItem={skill} />
                  </React.Fragment>
                ))}
              </SkillsInfoList>
            </SkillsListItem>
            <SkillsDivider />
          </div>
        ))
      ) : (
        <NoSkills>
          <NoContent message={NO_SKILLS} size={SIZE.medium} />
        </NoSkills>
      )}
    </SkillsList>
  </SkillsBox>
);

export default UserSkills;
