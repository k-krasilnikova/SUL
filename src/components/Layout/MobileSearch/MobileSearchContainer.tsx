import React, { useState } from 'react';

import { searchAllCourses } from 'api/courses';
import { Course } from 'types/course';

import MobileSearch from './MobileSearch';

const MobileSearchContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [coursesFound, setCoursesFound] = useState<Array<Course>>([]);

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchOpen(true);
    if (event.target.value.length) {
      searchAllCourses(event.target.value).then((courses) => setCoursesFound(courses));
    } else {
      setSearchOpen(false);
    }
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  return (
    <MobileSearch
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
    />
  );
};

export default MobileSearchContainer;
