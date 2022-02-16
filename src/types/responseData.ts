import { Course } from './course';

export interface ResponseDataType {
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  targetId?: string;
  data?: Array<Course>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
  handleSqueeze?: () => void;
  isSqueeze?: boolean;
  targetLoading?: boolean;
}
