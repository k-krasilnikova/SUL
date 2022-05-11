import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import useSearchAllCourses from 'api/courses/searchAllCourses';
import { errorSnackbar, errorSnackbarMessage } from 'constants/snackbarVariant';
import { SEARCH_DEBOUNCE_TIME } from 'constants/time';
import { useDebounce } from 'hooks';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';
import { ICourse } from 'types/course';

import SearchCourses from './SearchCourses';

const SearchCoursesContainer: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<Array<ICourse>>([]);

  const { enqueueSnackbar } = useSnackbar();

  const debouncedSearchValue = useDebounce(searchInputValue, SEARCH_DEBOUNCE_TIME);

  const { data: foundedCourses, isLoading: isSearchingCourses } =
    useSearchAllCourses(debouncedSearchValue);

  useEffect(() => {
    if (debouncedSearchValue && !isSearchingCourses) {
      if (foundedCourses) {
        setCoursesFound(foundedCourses);
        setSearchOpen(true);
      } else {
        enqueueSnackbar(errorSnackbarMessage.requestFailed, errorSnackbar);
      }
    }
  }, [debouncedSearchValue, enqueueSnackbar, foundedCourses, isSearchingCourses]);

  const handleSearchClose = () => {
    setSearchInputValue('');
    setSearchOpen(false);
  };

  const searchCourses = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
    if (!formattedValue.length) {
      setSearchOpen(false);
    }
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
