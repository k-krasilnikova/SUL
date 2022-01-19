import { Course } from './course';

export interface ResponeDataType {
  data?: Array<Course>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
}
