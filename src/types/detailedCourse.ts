import { NavigateFunction } from 'react-router';

import { PureClientCourse } from './clientCourse';
import { Course, TCourseStatus } from './course';

export interface IDetailedCourse {
  commonCourseData: Course;
  handleApplyCourse: () => void;
  page: string;
  id: string;
  status: TCourseStatus;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  clientCourseData?: PureClientCourse;
  isLoading?: boolean;
  targetId?: string | undefined;
  isProgressBarDisplayed?: boolean;
  isCourseCompleted?: boolean;
  isCourseDeclined?: boolean;
  isCourseStatusTesting?: boolean;
  isCourseStatusAssessment?: boolean;
  isCourseFailed?: boolean;
  progressValue?: number;
  progressText?: string;
  progressVariant?: string;
  handleClickDialogOpen?: () => void;
  isTestEnable?: boolean;
  isAdmin?: boolean;
}

export interface IDetailedCourseInfo {
  commonCourseData: Course;
  toggleFullText: () => void;
  isFullTextOpen: boolean;
  isProgressBarDisplayed?: boolean;
  progressValue?: number;
  progressText?: string;
  progressVariant?: string;
}

export interface IDetailedCourseActions {
  commonCourseData: Course;
  handleApplyCourse: () => void;
  page: string;
  clientCourseData?: PureClientCourse;
  id: string;
  status: string;
  isCourseCompleted?: boolean;
  isAdmin?: boolean;
  isLoading?: boolean;
}

export interface IBackButton {
  page: string;
}

export interface ISimilarCourses {
  commonCourseData: Course;
  windowWidth: string;
}
