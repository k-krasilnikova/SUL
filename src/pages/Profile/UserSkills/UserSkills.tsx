import React from 'react';
import { Divider } from '@mui/material';
import { Star as StarIcon, Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { SIZE } from 'constants/sizes';

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
  <>
    <SkillsBox>
      {userSkills?.length ? (
        <div>
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
            {userSkills?.map((skill) => (
              <>
                <SkillsListItem key={skill.id}>
                  <SkillTitle>
                    <StarIcon fontSize="small" color={skill.isCompleted ? 'primary' : 'disabled'} />
                    <Title>{skill.title}</Title>
                  </SkillTitle>
                  <SkillsInfoList>
                    {skill.technologies.map((skillItem) => (
                      <SkillInfoContainer key={skillItem.id} skillItem={skillItem} />
                    ))}
                  </SkillsInfoList>
                </SkillsListItem>
                {skill !== userSkills[userSkills.length - 1] && <Divider />}
              </>
            ))}
          </SkillsList>
        </div>
      ) : (
        <NoContent message={NO_COURSES} size={SIZE.medium} />
      )}
    </SkillsBox>
  </>
);

export default UserSkills;
