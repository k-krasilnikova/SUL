import { NavigateFunction } from 'react-router';

import { PureClientCourse } from './clientCourse';
import { Course } from './course';

export interface IDetailedCourse {
  commonCourseData: Course;
  handleApplyCourse: () => void;
  page: string;
  id: string;
  status: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  clientCourseData?: PureClientCourse;
  isLoading?: boolean;
  targetId?: string | undefined;
  isCourseApplicationSubmitted?: boolean;
  isCourseCompleted?: boolean;
  isCourseDeclined?: boolean;
  isCourseStatusTesting?: boolean;
  progressValue?: number;
  progressText?: string;
  progressVariant?: string;
  handleClickDialogOpen?: () => void;
  isTestEnable?: boolean;
}
