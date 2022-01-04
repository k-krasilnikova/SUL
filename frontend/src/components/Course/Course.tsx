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
  language?: string | undefined;
  duration: string;
  lessons: string;
  link?: string | undefined;
  styleProps?: {
    fontSize?: number;
    lineHeight?: number;
  };
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  language,
  duration,
  lessons,
  link,
  styleProps,
  children,
}) => (
  <CourseContainer>
    <ImageWrapper>
      <Image width={300} height={200} />
    </ImageWrapper>
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription lineHeight={styleProps?.lineHeight} fontSize={styleProps?.fontSize}>
      {description}
    </CourseDescription>
    <ButtonsContainer>
      <CourseInfo duration={duration} language={language} link={link} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
