import { useContext } from 'react';

import CoursesFiltersContext from 'context';
import { PATHS } from 'constants/routes';

const useGetCoursesPaths = (): { myCoursesPath: string; coursesPath: string } => {
  const { coursesFilters } = useContext(CoursesFiltersContext);

  const { myCoursesFilters: myCoursesQueries, coursesFilters: coursesQueries } = coursesFilters;

  return {
    myCoursesPath: PATHS.myCourses.concat(myCoursesQueries),
    coursesPath: PATHS.coursesList.concat(coursesQueries),
  };
};

export default useGetCoursesPaths;
