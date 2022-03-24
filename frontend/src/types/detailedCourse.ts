import { NavigateFunction } from 'react-router';
import { PureClientCourse } from './clientCourse';
import { Course } from './course';

export interface IDetailedCourse {
  commonCourseData: Course;
  clientCourseData?: PureClientCourse;
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  page: string;
  id: string;
  status: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  navigate: NavigateFunction;
  isLoading?: boolean;
  isCourseApplicationSubmitted?: boolean;
  isCourseCompleted?: boolean;
  handleClickDialogOpen?: () => void;
  isTestEnable?: boolean;
}
