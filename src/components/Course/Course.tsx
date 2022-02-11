import React from 'react';

import { Image } from 'components/Image';
import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import { ProgressBar } from 'components/ProgressBar';

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
  MobileCourseInfoBox,
  MobileCourseProgress,
} from './styled';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
  pageName?: string;
}

const PAGES = {
  myCourses: 'myCourses',
  coursesList: 'coursesList',
};

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  pageName,
  children,
}) => (
  <CourseContainer container direction="column">
    <AboutCourseContainer>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <div>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescriptionWrapper>
          <CourseDescription>{shortifyCourseDescription(description)}</CourseDescription>
        </CourseDescriptionWrapper>
        <MobileCourseInfoBox>
          <CourseInfo duration={duration} lessons={lessons} />
        </MobileCourseInfoBox>
      </div>
      {pageName === PAGES.myCourses && (
        <MobileCourseProgress>
          <ProgressBar value={50} text="50%" size="medium" textColor="#000000" />
        </MobileCourseProgress>
      )}
    </AboutCourseContainer>
    <ButtonsContainer>
      <CourseInfoBox>
        <CourseInfo duration={duration} lessons={lessons} />
      </CourseInfoBox>
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
