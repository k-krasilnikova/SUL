import React from 'react';
import { Link } from 'react-router-dom';

import { Course } from 'types/course';
import { PATHS } from 'constants/routes';
import CourseInfo from 'components/Course/CourseInfo';

import { SearchResultWrapper, SearchResultItem, Image, CourseTitle } from './styled';

interface CoursesFound {
  coursesFound: Array<Course>;
}

const SearchResult: React.FC<CoursesFound> = ({ coursesFound }) => (
  <SearchResultWrapper>
    {coursesFound.length ? (
      coursesFound.map((course, id, array) => (
        <Link key={course._id} to={`${PATHS.coursesList}/${course._id}`}>
          <SearchResultItem divider={id < array.length - 1}>
            <Image avatar={course.avatar} />
            <div>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseInfo lessons={course.lessons} duration={course.duration} type="searchCourse" />
            </div>
          </SearchResultItem>
        </Link>
      ))
    ) : (
      <span>No results</span>
    )}
  </SearchResultWrapper>
);

export default SearchResult;
