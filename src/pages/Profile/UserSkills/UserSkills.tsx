import React, { Suspense } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';

import SkillInfoContainer from 'pages/Profile/UserSkills/SkillInfoContainer';
import { NoContent } from 'components/NoContent';
import { NO_SKILLS } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { starEmpty, starContained } from 'icons';
import { Technologies } from 'types/skill';
import isSkillCompleted from 'utils/helpers/isSkillCompleted';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';

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
    <Suspense fallback={<Loader color="primary" type={LOADER.component} />}>
      <SearchWrapper>
        <SearchSkill
          disableUnderline
          placeholder="Search"
          inputProps={{ maxLength: 100 }}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="disabled" fontSize="medium" />
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
          technologies.map((techGroup) => (
            <div key={techGroup.group.name}>
              <SkillsListItem>
                <SkillTitle>
                  <Title>{techGroup.group.name || 'No group'}</Title>
                </SkillTitle>
                <SkillsInfoList>
                  {techGroup.achievedSkills.map((skillInfo) => (
                    <React.Fragment key={skillInfo.skill.name}>
                      <Star
                        alt="skill"
                        src={isSkillCompleted(skillInfo) ? starContained : starEmpty}
                      />
                      <SkillInfoContainer skillItem={skillInfo} />
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
    </Suspense>
  </SkillsBox>
);

export default UserSkills;
