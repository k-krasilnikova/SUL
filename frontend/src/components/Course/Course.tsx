import React from 'react';

import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import { convertCourseStatusToProgress } from 'utils/helpers/convertCourseStatusToProgress';

import { checkIcon } from 'icons';
import { COURSE_STATUSES } from 'constants/statuses';
import { PAGES } from 'constants/pages';
import { SIZE } from 'constants/sizes';

import CourseInfo from './CourseInfo';
import {
  CourseContainer,
  ImageWrapper,
  CourseTitle,
  CourseDescription,
  AboutCourseContainer,
  CourseDescriptionWrapper,
  MobileCourseInfoBox,
  MobileCourseProgress,
  MobileCourseCompleted,
  CourseTextContainer,
} from './styled';
import CourseButtons from './CourseButtons';
import ProgressBar from '../ProgressBar';

interface Props {
  description: string;
  title?: string;
  duration?: string;
  lessons?: number;
  status?: string;
  pageName?: string;
  windowWidth?: string;
  type?: string;
  imageUrl?: string;
  courseRef?: (node?: Element | null) => void;
}

const Course: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  pageName,
  status,
  windowWidth,
  type,
  imageUrl,
  courseRef,
  children,
}) => (
  <CourseContainer container direction="column" ref={courseRef}>
    <AboutCourseContainer type={type}>
      <ImageWrapper imageUrl={imageUrl} />
      <CourseTextContainer>
        <CourseTitle type={type}>{title}</CourseTitle>
        <CourseDescriptionWrapper type={type}>
          <CourseDescription type={type}>
            {shortifyCourseDescription(description, windowWidth, pageName)}
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
            size={SIZE.medium}
            text={convertCourseStatusToProgress(status).progressText}
            value={convertCourseStatusToProgress(status).progressValue}
            variant={convertCourseStatusToProgress(status).progressVariant}
          />
        </MobileCourseProgress>
      )}
    </AboutCourseContainer>
    <CourseButtons type={type} lessons={lessons} duration={duration}>
      {children}
    </CourseButtons>
  </CourseContainer>
);

export default Course;
