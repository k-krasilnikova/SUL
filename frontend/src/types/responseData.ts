import { Course } from './course';

export interface ResponseDataType {
  status: string;
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
}
