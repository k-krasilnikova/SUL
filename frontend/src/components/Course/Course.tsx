import React from 'react';

import { Image } from 'components/Image';
import textLimiter from 'utils/helpers/textLimiter';
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
  descriptionLimit: number;
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  descriptionLimit,
  children,
}) => (
  <CourseContainer>
    <AboutCourseContainer>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <CourseTitle>{title}</CourseTitle>
      <CourseDescription>{textLimiter(description, descriptionLimit)}</CourseDescription>
    </AboutCourseContainer>
    <ButtonsContainer>
      <CourseInfo duration={duration} lessons={lessons} />
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
