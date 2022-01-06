import React from 'react';

import Image from 'components/Image';
import CourseInfo from './CourseInfo';

import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  ButtonsContainer,
} from './styled';

interface Props {
  title: string;
  description: string;
  duration: string;
  lessons: string;
  size?: string;
}

const CourseItem: React.FC<Props> = ({ title, description, duration, lessons, size, children }) => (
  <CourseContainer size={size}>
    <ImageWrapper>
      <Image size={size} />
    </ImageWrapper>
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription size={size}>{description}</CourseDescription>
    <ButtonsContainer>
      <CourseInfo duration={duration} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
