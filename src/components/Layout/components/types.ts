import React from 'react';

import { CourseStatus } from 'enums/course';
import { ICourse } from 'types/course';

export interface ISearchResultContainerProps {
  coursesFound?: ICourse[];
  handleSearchClose: () => void;
  isSearchLoading: boolean;
}

export interface ISearchResultProps extends ISearchResultContainerProps {
  isSearchLoading: boolean;
  foundInMyCourses?: IClientCourseIds[];
}

export interface ISearchResultItemContainer {
  course: ICourse;
  addDivider: boolean;
  handleSearchClose: () => void;
  foundInMyCoursesId?: IClientCourseIds[];
}

export interface ISearchResultItem {
  course: ICourse;
  addDivider: boolean;
  handleSelectFoundCourse: (event: React.MouseEvent<HTMLElement>) => void;
  status?: CourseStatus;
}

export interface IClientCourseIds {
  courseId: string;
  clientCourseId: string;
}
