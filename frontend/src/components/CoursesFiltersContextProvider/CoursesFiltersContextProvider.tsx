import { FC, useState } from 'react';

import CoursesFiltersContext from 'context';

const CoursesFiltersContextProvider: FC = ({ children }) => {
  const [coursesFilters, setCoursesFilters] = useState({
    myCoursesFilters: '',
    coursesFilters: '',
  });

  return (
    <CoursesFiltersContext.Provider value={{ coursesFilters, setCoursesFilters }}>
      {children}
    </CoursesFiltersContext.Provider>
  );
};

export default CoursesFiltersContextProvider;
