import { BaseSyntheticEvent } from 'react';

import { ICoursesMapResponse, ICourseShortInfo, ICoursesMapElement } from 'types/course';

export interface ICoursesListContainerProps {
  courses: ICourseShortInfo[];
}

export type TCoursesListProps = ICoursesListContainerProps;

export interface IStackMapProps {
  coursesMapResponce?: ICoursesMapResponse;
}

export interface ICourseMapForCurrentStackProps {
  courseMapForCurrentStack: ICoursesMapElement[];
  isPrimaryStack: boolean;
  userRank?: number;
}

export interface ISkillsMapProps {
  isCoursesMapLoading: boolean;
  coursesMapResponse?: ICoursesMapResponse;
}

export interface ICourseContainerProps {
  course: ICourseShortInfo;
}

export interface ICourseProps extends ICourseContainerProps {
  handleCourseClick: (event: BaseSyntheticEvent) => void;
}
