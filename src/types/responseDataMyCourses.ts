import { ClientCourse } from './clientCourse';

export interface ResponseDataMyCourses {
  data?: Array<ClientCourse>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
  descriptionLimit: number;
}
