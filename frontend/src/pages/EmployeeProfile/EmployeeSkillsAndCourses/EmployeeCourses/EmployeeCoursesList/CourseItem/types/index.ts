import { ConvertedProgress } from 'utils/helpers/convertCourseStatusToProgress';

export interface ICourseItemContainerProps {
  title: string;
  status: string;
}

export interface ICourseItemProps extends ConvertedProgress {
  title: string;
  status: string;
  showCourseInfo?: () => void;
  hideCourseInfo?: () => void;
  isCourseTitleShown?: boolean;
}
