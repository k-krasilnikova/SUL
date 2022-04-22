import { NavigateFunction } from 'react-router';

import { CourseStatus } from 'enums/course';

import { PureClientCourse } from './clientCourse';
import { ICourse } from './course';
import { TVariantProgressBar } from './progressBar';

export interface IDetailedCourse {
  commonCourseData: ICourse;
  handleApplyCourse: () => void;
  page: string;
  id: string;
  status: CourseStatus;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  clientCourseData?: PureClientCourse;
  similarCourses?: ICourse[];
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
  isFullTextOpen: boolean;
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

export interface IBackButton {
  page: string;
}

export interface ISimilarCourses {
  similarCourses: ICourse[];
  windowWidth: string;
}
