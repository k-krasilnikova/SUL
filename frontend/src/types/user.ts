import { Course } from './course';
import { Skill } from './skill';
import { Notification } from './notification';

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
  phone?: string;
  skype?: string;
  position?: string;
  courses?: Array<Course>;
  handleLogOut?: () => void;
  skills?: Array<Skill>;
  notifications?: Array<Notification>;
}
