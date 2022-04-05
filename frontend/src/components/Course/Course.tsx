import React from 'react';

import { shortifyCourseDescription } from 'utils/helpers/shortifyCourseDescription';
import convertStatusToProgress from 'utils/helpers/convertStatusToProgress';
import { ProgressBar } from 'components/ProgressBar';
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
  children,
  windowWidth,
  type,
  imageUrl,
  courseRef,
}) => {
  return (
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
              text={convertStatusToProgress(status).progressText}
              value={convertStatusToProgress(status).progressValue}
              variant={convertStatusToProgress(status).progressVariant}
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
};

export default Course;
