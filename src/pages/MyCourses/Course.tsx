import React from 'react';

import Image from 'components/Image';
import CourseInfo from 'components/CourseInfo';

import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  CourseButton,
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

const CourseItem: React.FC<Props> = ({ title, description, language, duration, lessons, link }) => (
  <CourseContainer>
    <ImageWrapper>
      <Image size="large" />
    </ImageWrapper>
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription>{description}</CourseDescription>
    <ButtonsContainer>
      <CourseInfo duration={duration} language={language} link={link} lessons={lessons} />
      <Divider />
      <CourseButton color="primary" variant="contained">
        Start the test
      </CourseButton>
      <CourseButton color="primary" variant="contained">
        Details
      </CourseButton>
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
