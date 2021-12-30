import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import { InfoContainer, InfoItem } from './styled';

interface Props {
  duration: string;
  lessons: string;
  language: string;
  link: string;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons, language, link }) => (
  <InfoContainer>
    <InfoItem>
      <AccessTimeIcon />
      {duration}
    </InfoItem>
    <InfoItem>
      <PlayCircleOutlineIcon />
      {`${lessons} lessons`}
    </InfoItem>
    <InfoItem>
      <LanguageIcon />
      {language}
    </InfoItem>
    <InfoItem>
      <CollectionsBookmarkIcon />
      {link}
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
