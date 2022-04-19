import { IClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';

export interface ICourseProps {
  disableLink: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  windowWidth: string;
  lastCourseRef: (node?: Element | null) => void;
  isAdmin?: boolean;
  handleApplyCourse?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  targetId?: string;
  courses?: ICourse[];
  clientCourses?: IClientCourse[];
  isLoading?: boolean;
  targetLoading?: boolean;
}
