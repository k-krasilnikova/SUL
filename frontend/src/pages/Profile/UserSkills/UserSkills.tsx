import React from 'react';
import { Divider } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { starEmpty, starContained } from 'icons';

import {
  SearchWrapper,
  SearchSkill,
  SkillsBox,
  SkillsList,
  SkillsListItem,
  SkillTitle,
  Title,
  SkillsInfoList,
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
  setSearchSkill: (value: string) => void;
}

const UserSkills: React.FC<Props> = ({ userSkills, setSearchSkill }) => (
  <SkillsBox>
    <SearchWrapper>
      <SearchSkill
        disableUnderline
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" />
          </InputAdornment>
        }
        onChange={(event) => {
          setSearchSkill(event.target.value);
        }}
      />
      <Divider />
    </SearchWrapper>
    <SkillsList>
      {userSkills?.length ? (
        userSkills.map((skill) => (
          <div key={skill.id}>
            <SkillsListItem>
              <SkillTitle>
                <img alt="skill" src={skill.isCompleted ? starContained : starEmpty} />
                <Title>{skill.title}</Title>
              </SkillTitle>
              <SkillsInfoList>
                {skill.technologies.map((skillItem) => (
                  <SkillInfoContainer key={skillItem.id} skillItem={skillItem} />
                ))}
              </SkillsInfoList>
            </SkillsListItem>
            {skill !== userSkills[userSkills.length - 1] && <Divider />}
          </div>
        ))
      ) : (
        <NoContent message={NO_SKILLS} size={SIZE.medium} />
      )}
    </SkillsList>
  </SkillsBox>
);

export default UserSkills;
