import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { starEmpty, starContained } from 'icons';

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
  userSkills: Array<{
    id: number;
    title: string;
    isCompleted: boolean;
    technologies: Array<{
      id: number;
      technology: Array<string>;
      stages: Array<{
        stage: number;
        isCompleted: boolean;
      }>;
    }>;
  }>;
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
          <div key={skill.id}>
            <SkillsListItem>
              <SkillTitle>
                <Star alt="skill" src={skill.isCompleted ? starContained : starEmpty} />
                <Title>{skill.title}</Title>
              </SkillTitle>
              <SkillsInfoList>
                {skill.technologies.map((skillItem) => (
                  <SkillInfoContainer key={skillItem.id} skillItem={skillItem} />
                ))}
              </SkillsInfoList>
            </SkillsListItem>
            {skill !== userSkills[userSkills.length - 1] && <SkillsDivider />}
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
