import React, { useState } from 'react';

import { searchAllCourses } from 'api/courses';
import { Course } from 'types/course';

import MobileSearch from './MobileSearch';

const MobileSearchContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [coursesFound, setFoundCourses] = useState<Array<Course>>([]);

  const searchCourses = (courseName: string): void => {
    setSearchOpen(true);
    if (courseName.length) {
      searchAllCourses(courseName).then((courses) => setFoundCourses(courses));
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
