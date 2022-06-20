import { Dispatch, SetStateAction } from 'react';

interface ICoursesFilters {
  myCoursesFilters: string;
  coursesFilters: string;
}

export interface ICoursesFiltersContext {
  coursesFilters: ICoursesFilters;
  setCoursesFilters: Dispatch<SetStateAction<ICoursesFilters>>;
}
