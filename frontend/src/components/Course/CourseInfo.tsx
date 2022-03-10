import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { videoPlayer } from 'icons';

import { InfoContainer, InfoItem, InfoItemText, InfoItemTextBox } from './styled';

interface Props {
  duration: string | undefined;
  lessons: number | undefined;
  type?: string;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons, type }) => (
  <InfoContainer type={type}>
    <InfoItem>
      <AccessTimeIcon fontSize="small" />
      <InfoItemTextBox>
        <InfoItemText>{duration}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
    <InfoItem>
      <img alt="lessons" src={videoPlayer} />
      <InfoItemTextBox>
        <InfoItemText>{`${lessons} lessons`}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
