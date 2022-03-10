import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { searchAllCourses } from 'api/courses';
import { Course } from 'types/course';
import SearchCourses from 'components/Layout/Header/SearchCourses/SearchCourses';
import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';

const SearchCoursesContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<Array<Course>>([]);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const timer = setTimeout(() => {
      const getCourses = async (search: string) => {
        if (searchInputValue.length) {
          const searchResponse = await searchAllCourses(search);
          if (searchResponse.data) {
            setCoursesFound(searchResponse.data);
            setSearchOpen(true);
          } else {
            enqueueSnackbar(enqueueSnackbar(errorSnackbarMessage.requestFailed, errorSnackbar));
          }
        }
      };
      getCourses(searchInputValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchInputValue, enqueueSnackbar]);

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length) {
      const formattedValue = formatInputValue(event.target.value);
      setSearchInputValue(formattedValue);
    } else {
      setSearchOpen(false);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const checkSpace = (event: React.KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  return (
    <SearchCourses
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
      checkSpace={checkSpace}
    />
  );
};

export default SearchCoursesContainer;
