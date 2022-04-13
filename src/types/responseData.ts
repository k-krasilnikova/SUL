import { ClientCourse } from './clientCourse';
import { ICourse } from './course';

export interface ResponseDataType {
  handleApplyCourse?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  targetId?: string;
  courses?: ICourse[];
  clientCourses?: ClientCourse[];
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
  handleSqueeze?: () => void;
  isSqueeze?: boolean;
  targetLoading?: boolean;
}
