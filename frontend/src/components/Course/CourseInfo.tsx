import React from 'react';

import { clock, videoPlayer } from 'icons';

import { InfoContainer, InfoItem, InfoItemText, InfoItemTextBox } from './styled';

interface Props {
  duration: string | undefined;
  lessons: number | undefined;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons }) => (
  <InfoContainer>
    <InfoItem>
      <img alt="duration" src={clock} />
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
