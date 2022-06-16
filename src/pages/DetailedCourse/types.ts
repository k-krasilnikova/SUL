import { NavigateFunction } from 'react-router';

import { CourseStatus } from 'enums/course';
import { PureClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';
import { TVariantProgressBar } from 'types/progressBar';

export interface IDetailedCourse {
  commonCourseData: ICourse;
  handleApplyCourse: () => void;
  page: string;
  id: string;
  status: CourseStatus;
  windowWidth: string;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  clientCourseData?: PureClientCourse;
  similarCourses?: ICourse[];
  isFullTextOpen?: boolean;
  isDescriptionLengthExceed?: boolean;
  isLoading?: boolean;
  targetId?: string;
  isProgressBarDisplayed?: boolean;
  isCourseCompleted?: boolean;
  isCourseDeclined?: boolean;
  isCourseStatusTesting?: boolean;
  isCourseStatusAssessment?: boolean;
  isCourseFailed?: boolean;
  progressValue?: number;
  progressText?: string;
  progressVariant?: TVariantProgressBar;
  handleClickDialogOpen?: () => void;
  isTestEnable?: boolean;
  isAdmin?: boolean;
}

export interface IDetailedCourseInfo {
  commonCourseData: ICourse;
  toggleFullText: () => void;
  isFullTextOpen?: boolean;
  isDescriptionLengthExceed?: boolean;
  isProgressBarDisplayed?: boolean;
  progressValue?: number;
  progressText?: string;
  progressVariant?: TVariantProgressBar;
}

export interface IDetailedCourseActions {
  commonCourseData: ICourse;
  handleApplyCourse: () => void;
  page: string;
  clientCourseData?: PureClientCourse;
  id: string;
  status: CourseStatus;
  isCourseCompleted?: boolean;
  isAdmin?: boolean;
  isLoading?: boolean;
}

export interface IBackButtonContainer {
  page: string;
}

export interface IBackButton extends IBackButtonContainer {
  coursesPath: string;
  myCoursesPath: string;
}

export interface ISimilarCourses {
  similarCourses: ICourse[];
  windowWidth: string;
}

export interface IAcquiredSkillsProps {
  technologies: ICourse['technologies'];
}

export interface IDetailedCourseContainerProps {
  page: string;
}

export interface ICourseInfoBlockProps {
  title: string;
}
export interface IEditCourseButtonProps {
  id: string;
}
