import { Course } from './course';

export interface ResponseDataType {
  data?: Array<Course>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
  handleApplyCourse?: () => void;
  handleSqueeze?: () => void;
  isSqueeze?: boolean;
}
