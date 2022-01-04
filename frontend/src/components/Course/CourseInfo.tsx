import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import { InfoContainer, InfoItem } from './styled';

interface Props {
  duration: string;
  lessons: string;
  language?: string | undefined;
  link?: string | undefined;
  backgroundColor?: string;
  color?: string;
  styleProps?: {
    backgroundColor?: string | undefined;
    color?: string | undefined;
    fontSize?: number | undefined;
  };
}

const CourseInfo: React.FC<Props> = ({ duration, lessons, language, link, styleProps }) => {
  console.log(styleProps);
  return (
    <InfoContainer
      backgroundColor={styleProps?.backgroundColor}
      color={styleProps?.color}
      fontSize={styleProps?.fontSize}
    >
      <InfoItem>
        <AccessTimeIcon />
        {duration}
      </InfoItem>
      <InfoItem>
        <PlayCircleOutlineIcon />
        {`${lessons} lessons`}
      </InfoItem>
      {language && (
        <InfoItem>
          <LanguageIcon />
          {language}
        </InfoItem>
      )}
      {link && (
        <InfoItem>
          <CollectionsBookmarkIcon />
          {link}
        </InfoItem>
      )}
    </InfoContainer>
  );
};

export default CourseInfo;
