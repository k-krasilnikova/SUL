import { FC, useEffect, useState } from 'react';

import { useSearchAllCourses } from 'api/courses';
import { useDebounce } from 'hooks';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';

import SearchCourses from './SearchCourses';

const SearchCoursesContainer: FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const debouncedSearchValue = useDebounce(searchInputValue);

  const {
    data: foundedCoursesData,
    isLoading: isSearchCoursesLoading,
    isFetching,
  } = useSearchAllCourses(debouncedSearchValue);

  useEffect(() => {
    if (isFetching) {
      setSearchOpen(true);
      setMobileSearchOpen(true);
    }
  }, [isFetching]);

  const handleSearchClose = () => {
    setSearchInputValue('');
    setSearchOpen(false);
    setMobileSearchOpen(false);
  };
  const handleMobileSearch = () => {
    handleSearchClose();
    setMobileSearchOpen((prev) => !prev);
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
      coursesFound={foundedCoursesData}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchInputValue={searchInputValue}
      isSearchCoursesLoading={isSearchCoursesLoading}
      handleMobileSearch={handleMobileSearch}
      isMobileSearchOpen={isMobileSearchOpen}
    />
  );
};

export default SearchCoursesContainer;
