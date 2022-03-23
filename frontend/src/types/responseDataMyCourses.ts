import { ClientCourse } from './clientCourse';

export interface ResponseDataMyCourses {
  clientCourses?: ClientCourse[];
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
}
