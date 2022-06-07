import { FC } from 'react';
import { Grid } from '@mui/material';

import SkillInfo from 'components/SkillInfo';
import CourseInfoBlock from 'pages/DetailedCourse/components/CourseInfoBlock';

import { SkillsList, SkillInfoWrapper } from './styled';
import { IAcquiredSkillsProps } from '../types';

const AcquiredSkills: FC<IAcquiredSkillsProps> = ({ technologies }) => (
  <CourseInfoBlock title="Acquired skills">
    <Grid item xs={12}>
      <SkillsList>
        {technologies.map(({ skill, points }) => (
          <SkillInfoWrapper>
            <SkillInfo skillScore={points} skill={skill} />
          </SkillInfoWrapper>
        ))}
      </SkillsList>
    </Grid>
  </CourseInfoBlock>
);

export default AcquiredSkills;
