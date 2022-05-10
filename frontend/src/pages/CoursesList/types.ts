import { IClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';

export interface ICourseProps {
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
