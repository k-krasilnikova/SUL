import React from 'react';

import Image from 'components/Image';
import CourseInfo from './CourseInfo';

import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  ButtonsContainer,
  Divider,
} from './styled';

interface Props {
  title: string;
  description: string;
  language: string;
  duration: string;
  lessons: string;
  link: string;
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  language,
  duration,
  lessons,
  link,
  children,
}) => (
  <CourseContainer>
    <ImageWrapper>
      <Image width={300} height={200} />
    </ImageWrapper>
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription>{description}</CourseDescription>
    <ButtonsContainer>
      <CourseInfo duration={duration} language={language} link={link} lessons={lessons} />
      <Divider />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
