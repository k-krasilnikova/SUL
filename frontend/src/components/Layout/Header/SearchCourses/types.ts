import React from 'react';

import { ICourse } from 'types/course';

export interface ISearchResultContainerProps {
  coursesFound: ICourse[];
  handleSearchClose: () => void;
}

export interface ISearchResultProps extends ISearchResultContainerProps {
  foundInMyCourses?: IClientCourseIds[];
}

export interface ISearchResultItemContainer {
  course: ICourse;
  addDivider: boolean;
  foundInMyCoursesId?: IClientCourseIds[];
  handleSearchClose: () => void;
}

export interface ISearchResultItem {
  course: ICourse;
  addDivider: boolean;
  status?: string;
  handleSelectFoundCourse: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IClientCourseIds {
  courseId: string;
  clientCourseId: string;
}
