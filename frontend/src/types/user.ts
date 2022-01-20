import { UseMutationResult } from 'react-query';

export interface User {
  firstName?: string;
  lastName?: string;
  role?: string;
  unit?: string;
  department?: string;
  group?: string;
  myCoursesNumber?: number;
  avatar?: string;
  birthday?: Date;
  skype?: string;
  position?: string;
  skills?: string[];
  courses?: string[];
  mutateAsync?: () => UseMutationResult;
}
