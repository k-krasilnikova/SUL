import React from 'react';

import { Info } from 'enums/info';
import { videoPlayer, clock } from 'icons';

import {
  InfoContainer,
  InfoItem,
  InfoItemText,
  InfoItemTextBox,
  DurationIcon,
  LessonsIcon,
} from './styled';

interface IProps {
  duration?: string;
  lessons?: number;
  type?: Info;
}

const CourseInfo: React.FC<IProps> = ({ duration, lessons, type }) => (
  <InfoContainer type={type}>
    <InfoItem>
      <DurationIcon alt="lessons" src={clock} />
      <InfoItemTextBox>
        <InfoItemText>{duration}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
    <InfoItem>
      <LessonsIcon alt="lessons" src={videoPlayer} />
      <InfoItemTextBox>
        <InfoItemText>{`${lessons} lessons`}</InfoItemText>
      </InfoItemTextBox>
    </InfoItem>
  </InfoContainer>
);

export default CourseInfo;
