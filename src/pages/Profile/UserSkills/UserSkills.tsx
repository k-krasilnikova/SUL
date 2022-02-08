/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { starEmpty, starContained } from 'icons';
import { Skill } from 'types/skill';
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
  userSkills?: Array<Skill>;
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
      {userSkills?.length ? (
        userSkills.map((skill) => (
          <div>
            {/* <SkillsListItem>
              <SkillTitle>
                <Star alt="skill" src={isSkillCompleted(skill) ? starContained : starEmpty} />
                <Title>{skill.skillGroup}</Title>
              </SkillTitle>
              <SkillsInfoList>
                {skill.skillList.map((skillItem) => (
                  <SkillInfoContainer skillItem={skillItem} />
                ))}
              </SkillsInfoList>
            </SkillsListItem>
            {skill !== userSkills[userSkills.length - 1] && <SkillsDivider />} */}
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
