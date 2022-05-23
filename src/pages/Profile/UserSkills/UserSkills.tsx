import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';
import { Search } from '@mui/icons-material';

import NoContent from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { Size } from 'enums/sizes';
import { starContained } from 'icons';
import { Technologies } from 'types/skill';

import SkillInfo from './SkillInfo';

import {
  SearchWrapper,
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
  technologies?: Technologies;
  searchSkillInList: (value: string) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (value: string) => void;
  searchSkill: string;
}

const UserSkills: React.FC<Props> = ({
  technologies,
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
      <Divider />
    </SearchWrapper>
    <SkillsList>
      {technologies && technologies.length ? (
        technologies.map((techGroup, id) => {
          const isDividerVisible = id < technologies.length - 1;
          return (
            <div key={`${techGroup.group.name}_id`}>
              <SkillsListItem>
                <SkillTitle>
                  {techGroup.isPrimary && <Star alt="primary" src={starContained} />}
                  <Title>{techGroup.group.name || 'No group'}</Title>
                </SkillTitle>
                <SkillsInfoList>
                  {techGroup.achievedSkills.map((skillInfo) => (
                    <React.Fragment key={`${skillInfo.skill.name}_id`}>
                      <SkillInfo skillItem={skillInfo} />
                    </React.Fragment>
                  ))}
                </SkillsInfoList>
              </SkillsListItem>
              {isDividerVisible && <SkillsDivider />}
            </div>
          );
        })
      ) : (
        <NoSkills>
          <NoContent message={NO_SKILLS} size={Size.medium} />
        </NoSkills>
      )}
    </SkillsList>
  </SkillsBox>
);

export default UserSkills;
