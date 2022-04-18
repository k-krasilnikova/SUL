import React from 'react';

import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import { convertCourseStatusToProgress } from 'utils/helpers/convertCourseStatusToProgress';

import { checkIcon } from 'icons';
import { PAGES } from 'constants/pages';
import { ESize } from 'enums/sizes';
import { CourseStatus } from 'enums/courseEnums';
import { EInfo } from 'enums/info';

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
  status?: CourseStatus;
  pageName?: string;
  windowWidth?: string;
  type?: EInfo;
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
        {status === CourseStatus.completed && (
          <MobileCourseCompleted>
            Completed <img alt="" src={checkIcon} />
          </MobileCourseCompleted>
        )}
      </CourseTextContainer>
      {pageName === PAGES.myCourses && status !== CourseStatus.completed && (
        <MobileCourseProgress>
          <ProgressBar
            size={ESize.medium}
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
