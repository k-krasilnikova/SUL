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
  styleProps?: {
    fontSize?: number;
    lineHeight?: number;
    size?: string;
    imgWidth?: number;
    imgHeight?: number;
  };
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  styleProps,
  children,
}) => (
  <CourseContainer size={styleProps?.size}>
    <ImageWrapper>
      <Image width={styleProps?.imgWidth} height={styleProps?.imgHeight} />
    </ImageWrapper>
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription lineHeight={styleProps?.lineHeight} fontSize={styleProps?.fontSize}>
      {description}
    </CourseDescription>
    <ButtonsContainer>
      <CourseInfo duration={duration} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
