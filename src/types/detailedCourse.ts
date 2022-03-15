import { Course } from './course';

export interface IDetailedCourse {
  courseData: Course;
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  buttonId: {
    [key: string]: string | undefined;
  };
  page: string;
  id: string;
  status: string;
  windowWidth: string;
  isFullTextOpen: boolean;
  toggleFullText: () => void;
  isCourseStatusPending: boolean;
  isCourseLearningDisabled: boolean;
  isLoading?: boolean;
  targetId?: string | undefined;
  isCourseApplicationSubmitted?: boolean;
  isCourseCompleted?: boolean;
  isCourseStatusTesting?: boolean;
}
