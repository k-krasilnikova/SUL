import { FC } from 'react';

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

interface ICourseInfoProps {
  duration?: string;
  lessons?: number;
  type?: Info;
}

const CourseInfo: FC<ICourseInfoProps> = ({ duration, lessons, type }) => (
  <InfoContainer type={type}>
    {duration && (
      <InfoItem>
        <DurationIcon alt="lessons" src={clock} type={type} />
        <InfoItemTextBox>
          <InfoItemText>{duration}</InfoItemText>
        </InfoItemTextBox>
      </InfoItem>
    )}
    {lessons && (
      <InfoItem>
        <LessonsIcon alt="lessons" src={videoPlayer} type={type} />
        <InfoItemTextBox>
          <InfoItemText>{`${lessons} lessons`}</InfoItemText>
        </InfoItemTextBox>
      </InfoItem>
    )}
  </InfoContainer>
);

export default CourseInfo;
