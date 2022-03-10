import React, { useState, useEffect } from 'react';

import { searchAllCourses } from 'api/courses';
import { Course } from 'types/course';

import SearchCourses from './SearchCourses';

const SearchCoursesContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<Array<Course>>([]);

  const getCourses = async (search: string) => {
    const searchResponse = await searchAllCourses(search);
    setCoursesFound(searchResponse);
    setSearchOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getCourses(searchInputValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchInputValue]);

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length) {
      setSearchInputValue(event.target.value);
    } else {
      setSearchOpen(false);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <SearchCourses
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
    />
  );
};

export default SearchCoursesContainer;
