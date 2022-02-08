import { Course } from './course';

export interface ResponseDataType {
  status: string;
  targetId?: string;
  data?: Array<Course>;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: string | unknown;
  handleApplyCourse: (event: React.MouseEvent<Element, MouseEvent>) => void;
  handleSqueeze?: () => void;
  isSqueeze?: boolean;
}
