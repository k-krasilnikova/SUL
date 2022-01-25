import React from 'react';

import { Image } from 'components/Image';
import CourseInfo from './CourseInfo';

import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  AboutCourseContainer,
  ButtonsContainer,
} from './styled';

interface Props {
  title: string | undefined;
  description: string | undefined;
  duration: string | undefined;
  lessons: number | undefined;
}

const CourseItem: React.FC<Props> = ({ title, description, duration, lessons, children }) => (
  <CourseContainer>
    <AboutCourseContainer>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <CourseTitle>{title}</CourseTitle>
      <CourseDescription>{description}</CourseDescription>
    </AboutCourseContainer>
    <ButtonsContainer>
      <CourseInfo duration={duration} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
