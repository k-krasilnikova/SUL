import React from 'react';

import { Image } from 'components/Image';
import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';

import CourseInfo from './CourseInfo';
import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  AboutCourseContainer,
  ButtonsContainer,
  CourseDescriptionWrapper,
  CourseInfoBox,
} from './styled';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
  windowWidth?: string;
  type?: string;
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  children,
  windowWidth,
  type,
}) => (
  <CourseContainer container direction="column">
    <AboutCourseContainer type={type}>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <CourseTitle type={type}>{title}</CourseTitle>
      <CourseDescriptionWrapper type={type}>
        <CourseDescription type={type}>
          {shortifyCourseDescription(description, windowWidth)}
        </CourseDescription>
      </CourseDescriptionWrapper>
    </AboutCourseContainer>
    <ButtonsContainer type={type}>
      <CourseInfoBox type={type}>
        <CourseInfo duration={duration} lessons={lessons} />
      </CourseInfoBox>
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
