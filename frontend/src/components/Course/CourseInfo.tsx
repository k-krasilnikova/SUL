import React from 'react';

import { clock, videoPlayer } from 'icons';

import { InfoContainer, InfoItem, InfoItemText, InfoItemTextBox, InfoItemIcon } from './styled';

interface Props {
  duration: string | undefined;
  lessons: number | undefined;
}

const CourseInfo: React.FC<Props> = ({ duration, lessons }) => (
  <InfoContainer>
    <InfoItem>
      <InfoItemIcon alt="duration" src={clock} />
      <InfoItemTextBox>
        <InfoItemText>{duration}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
    <InfoItem>
      <InfoItemIcon alt="lessons" src={videoPlayer} />
      <InfoItemTextBox>
        <InfoItemText>{`${lessons} lessons`}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
