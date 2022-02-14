import React from 'react';

import { Image } from 'components/Image';
import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import { ProgressBar } from 'components/ProgressBar';
import { checkIcon } from 'icons';

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
  MobileCourseCompleted,
} from './styled';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
  pageName?: string;
  status?: string;
  progress?: number;
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
  status,
  progress,
  children,
}) => (
  <CourseContainer container direction="column">
    <AboutCourseContainer>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <div style={{ flexGrow: '2' }}>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescriptionWrapper>
          <CourseDescription>{shortifyCourseDescription(description)}</CourseDescription>
        </CourseDescriptionWrapper>
        <MobileCourseInfoBox>
          <CourseInfo duration={duration} lessons={lessons} />
        </MobileCourseInfoBox>
        {status === 'completed' && (
          <MobileCourseCompleted>
            Completed <img alt="" src={checkIcon} />
          </MobileCourseCompleted>
        )}
      </div>
      {pageName === PAGES.myCourses && status !== 'completed' && (
        <MobileCourseProgress>
          <ProgressBar value={progress} text={`${progress}%`} size="medium" textColor="#000000" />
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
