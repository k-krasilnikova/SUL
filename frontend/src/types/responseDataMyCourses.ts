import { ClientCourse } from './clientCourse';

export interface ResponseDataMyCourses {
  clientCourses?: Array<ClientCourse>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
}
