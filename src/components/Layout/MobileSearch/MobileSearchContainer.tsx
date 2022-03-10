import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { searchAllCourses } from 'api/courses';
import { Course } from 'types/course';

import MobileSearch from './MobileSearch';

const MobileSearchContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<Array<Course>>([]);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const timer = setTimeout(() => {
      const getCourses = async (search: string) => {
        if (searchInputValue.length > 0) {
          const searchResponse = await searchAllCourses(search);
          if (searchResponse.data) {
            setCoursesFound(searchResponse.data);
            setSearchOpen(true);
          } else {
            enqueueSnackbar('Something went wrong');
          }
        }
      };
      getCourses(searchInputValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchInputValue, enqueueSnackbar]);

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length) {
      const formattedValue = event.target.value.split(/\s+/).join(' ').trimStart().trimEnd();
      setSearchInputValue(formattedValue);
    } else {
      setSearchOpen(false);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const checkSpace = (event: React.KeyboardEvent) => {
    const { key } = event;
    const formattedKey = key.trim();
    if (!formattedKey && searchInputValue.length === 0) {
      event.preventDefault();
    }
  };
  return (
    <MobileSearch
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
      checkSpace={checkSpace}
    />
  );
};

export default MobileSearchContainer;
