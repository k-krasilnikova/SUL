import { FC, useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import { useSearchAllCourses } from 'api/courses';
import { ICourse } from 'types/course';
import { useDebounce } from 'hooks';
import { formatInputValue, checkWhitespace } from 'utils/helpers/searchHelpers';

import MobileSearch from './MobileSearch';

const MobileSearchContainer: FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [coursesFound, setCoursesFound] = useState<ICourse[]>([]);

  const debouncedSearchValue = useDebounce(searchInputValue);
  const { data: courseResponse, isLoading: isSearchLoading } =
    useSearchAllCourses(debouncedSearchValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedSearchValue) {
        if (
          courseResponse?.filter((courseList) => {
            return courseList.title.toLowerCase().includes(searchInputValue.toLowerCase());
          })
        ) {
          setCoursesFound(courseResponse);
          setSearchOpen(true);
        } else {
          setCoursesFound([]);
          setSearchOpen(false);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedSearchValue, courseResponse, searchInputValue]);

  const searchCourses = (event: ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
    if (!formattedValue.length) {
      setSearchOpen(false);
    }
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const checkSpace = (event: KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  return (
    <MobileSearch
      isSearchOpen={isSearchOpen}
      searchCourses={searchCourses}
      handleSearchClose={handleSearchClose}
      coursesFound={coursesFound}
      checkSpace={checkSpace}
      isSearchLoading={isSearchLoading}
    />
  );
};

export default MobileSearchContainer;
