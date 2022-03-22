import { NavigateFunction } from 'react-router';
import { PureClientCourse } from './clientCourse';
import { Course } from './course';

export interface IDetailedCourse {
  commonCourseData: Course;
  handleApplyCourse: () => void;
  page: string;
  id: string;
  status: string;
  progressValue?: number;
  progressText?: string;
  progressVariant?: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  clientCourseData?: PureClientCourse;
  isLoading?: boolean;
  isCourseApplicationSubmitted?: boolean;
  isCourseCompleted?: boolean;
  handleClickDialogOpen?: () => void;
  isTestEnable?: boolean;
}
