import React from 'react';

import { videoPlayer, clock } from 'icons';
import { ICourseInfo } from 'types/course';

import {
  InfoContainer,
  InfoItem,
  InfoItemText,
  InfoItemTextBox,
  DurationIcon,
  LessonsIcon,
} from './styled';

const CourseInfo: React.FC<ICourseInfo> = ({ duration, lessons, type }) => (
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
