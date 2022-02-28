import React from 'react';

import { Image } from 'components/Image';
import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import { ProgressBar } from 'components/ProgressBar';
import { checkIcon } from 'icons';
import { COURSE_STATUSES } from 'constants/statuses';
import { PAGES } from 'constants/pages';

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
  CourseTextContainer,
} from './styled';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
  pageName?: string;
  status?: string;
  progress?: number;
  windowWidth?: string;
  type?: string;
  imageUrl?: string;
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  pageName,
  status,
  progress,
  children,
  windowWidth,
  type,
  imageUrl,
}) => (
  <CourseContainer container direction="column">
    <AboutCourseContainer type={type}>
      <ImageWrapper>
        <Image imageUrl={imageUrl} />
      </ImageWrapper>
      <CourseTextContainer>
        <CourseTitle type={type}>{title}</CourseTitle>
        <CourseDescriptionWrapper type={type}>
          <CourseDescription type={type}>
            {shortifyCourseDescription(description, windowWidth)}
          </CourseDescription>
        </CourseDescriptionWrapper>
        <MobileCourseInfoBox>
          <CourseInfo duration={duration} lessons={lessons} />
        </MobileCourseInfoBox>
        {status === COURSE_STATUSES.completed && (
          <MobileCourseCompleted>
            Completed <img alt="" src={checkIcon} />
          </MobileCourseCompleted>
        )}
      </CourseTextContainer>
      {pageName === PAGES.myCourses && status !== COURSE_STATUSES.completed && (
        <MobileCourseProgress>
          <ProgressBar
            value={progress}
            text={`${progress}%`}
            size="medium"
            variant="mobileCourse"
          />
        </MobileCourseProgress>
      )}
    </AboutCourseContainer>
    <ButtonsContainer type={type}>
      <CourseInfoBox type={type}>
        <CourseInfo duration={duration} lessons={lessons} />
      </CourseInfoBox>
      {children}
    </ButtonsContainer>
  </CourseContainer>
);

export default CourseItem;
