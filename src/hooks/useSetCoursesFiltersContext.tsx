import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CoursesFiltersContext from 'context';
import { CoursesFilters } from 'enums/coursesFilters';

const useSetCoursesFiltersContext = (coursesFiltersType: CoursesFilters): void => {
  const { coursesFilters, setCoursesFilters } = useContext(CoursesFiltersContext);
  const { search } = useLocation();

  useEffect(() => {
    const handleFiltersChange = (searchQueries: string) => {
      if (coursesFilters[coursesFiltersType] !== searchQueries) {
        setCoursesFilters({ ...coursesFilters, [coursesFiltersType]: searchQueries });
      }
    };

    handleFiltersChange(search);
  }, [search, coursesFilters, coursesFiltersType, setCoursesFilters]);
};

export default useSetCoursesFiltersContext;
