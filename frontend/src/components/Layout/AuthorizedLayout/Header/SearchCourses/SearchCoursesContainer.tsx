import React, { useEffect, useState } from 'react';

import { useSearchAllCourses } from 'api/courses';
import { useDebounce } from 'hooks';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';

import SearchCourses from './SearchCourses';

const SearchCoursesContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const debouncedSearchValue = useDebounce(searchInputValue);

  const {
    data: foundedCourses,
    isLoading: isSearchLoading,
    isFetching,
  } = useSearchAllCourses(debouncedSearchValue);

  // useEffect(() => {
  //   if (debouncedSearchValue && !isSearchingCourses) {
  //     if (foundedCourses) {
  //       setCoursesFound(foundedCourses);
  //       setSearchOpen(true);
  //     } else {
  //       enqueueSnackbar(errorSnackbarMessage.requestFailed, errorSnackbar);
  //     }
  //   }
  // }, [debouncedSearchValue, enqueueSnackbar, foundedCourses, isSearchingCourses]);

  useEffect(() => {
    if (isFetching) {
      setSearchOpen(true);
    }
  }, [isFetching]);

  const handleSearchClose = () => {
    setSearchInputValue('');
    setSearchOpen(false);
  };

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
    // if (!formattedValue.length) {
    //   setSearchOpen(false);
    // }
  };
  console.log(isFetching);
  const checkSpace = (event: React.KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  const checkPastedValue = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const inputValue = event.clipboardData.getData('Text');
    const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
    setSearchInputValue(formattedValue);
  };
  console.log(isSearchLoading);
  return (
    <SearchCourses
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={foundedCourses}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchInputValue={searchInputValue}
      isSearchLoading={isSearchLoading}
    />
  );
};

export default SearchCoursesContainer;
