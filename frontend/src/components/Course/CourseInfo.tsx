import React from 'react';

import { clock, videoPlayer } from 'icons';

import { InfoContainer, InfoItem, InfoItemText } from './styled';

interface Props {
  duration: string;
  lessons: number;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons }) => (
  <InfoContainer>
    <InfoItem>
      <img alt="duration" src={clock} />
      <InfoItemText>{duration}</InfoItemText>
    </InfoItem>
    <InfoItem>
      <img alt="lessons" src={videoPlayer} />
      <InfoItemText>{`${lessons} lessons`}</InfoItemText>
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
