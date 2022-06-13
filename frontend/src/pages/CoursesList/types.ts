import { IClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';

export interface ICourseProps {
  windowWidth: string;
  isFetchingNextPage: boolean;
  isFetching: boolean;
  isEmptyFilters: boolean;
  lastCourseRef: (node?: Element | null) => void;
  withStatusSelect?: boolean;
  isAdmin?: boolean;
  handleApplyCourse?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  targetId?: string;
  courses?: ICourse[];
  clientCourses?: IClientCourse[];
  isLoading?: boolean;
  targetLoading?: boolean;
}
