import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { Course } from 'types/course';
import SearchCourses from 'components/Layout/Header/SearchCourses/SearchCourses';
import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { SEARCH_DEBOUNCE_TIME } from 'constants/time';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';
import { useDebounce } from 'hooks';
import useSearchAllCourses from 'api/courses/searchAllCourses';

const SearchCoursesContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<Array<Course>>([]);

  const { enqueueSnackbar } = useSnackbar();

  const debouncedSearchValue = useDebounce(searchInputValue, SEARCH_DEBOUNCE_TIME);

  const { data: foundedCourses, isLoading: isSearchingCourses } =
    useSearchAllCourses(debouncedSearchValue);

  useEffect(() => {
    if (debouncedSearchValue && isSearchingCourses) {
      if (foundedCourses) {
        setCoursesFound(foundedCourses);
        setSearchOpen(true);
      } else {
        enqueueSnackbar(errorSnackbarMessage.requestFailed, errorSnackbar);
      }
    }
  }, [debouncedSearchValue, enqueueSnackbar, foundedCourses, isSearchingCourses]);

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
    if (!formattedValue.length) {
      setSearchOpen(false);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const checkSpace = (event: React.KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  const checkPastedValue = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const inputValue = event.clipboardData.getData('Text');
    const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
    setSearchInputValue(formattedValue);
  };

  return (
    <SearchCourses
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchInputValue={searchInputValue}
    />
  );
};

export default SearchCoursesContainer;
