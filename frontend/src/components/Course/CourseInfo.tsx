import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { InfoContainer, InfoItem } from './styled';

interface Props {
  duration: string;
  lessons: number;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons }) => (
  <InfoContainer>
    <InfoItem>
      <AccessTimeIcon />
      {duration}
    </InfoItem>
    <InfoItem>
      <PlayCircleOutlineIcon />
      {`${lessons} lessons`}
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
