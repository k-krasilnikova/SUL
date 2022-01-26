import React from 'react';

import { Image } from 'components/Image';
import { shortify } from 'utils/helpers/shortify';

import CourseInfo from './CourseInfo';
import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  AboutCourseContainer,
  ButtonsContainer,
  CourseDescriptionWrapper,
} from './styled';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
}

const CourseItem: React.FC<Props> = ({ title, description, duration, lessons, children }) => (
  <CourseContainer direction="column">
    <AboutCourseContainer>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <CourseTitle>{title}</CourseTitle>
      <CourseDescriptionWrapper>
        <CourseDescription>{shortify(description)}</CourseDescription>
      </CourseDescriptionWrapper>
    </AboutCourseContainer>
    <ButtonsContainer>
      <CourseInfo duration={duration} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
