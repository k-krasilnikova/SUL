import React from 'react';

import SearchResult from './SearchResult';
import { ISearchResultContainerProps } from '../types';

const SearchResultContainer: React.FC<ISearchResultContainerProps> = ({ ...props }) => {
  // const [foundInMyCoursesIds, setFoundInMyCoursesIds] = useState<IClientCourseIds[]>([]);

  // const { data: clientCoursesData } = useSearchClientCourses();

  // useEffect(() => {
  //   if (clientCoursesData) {
  //     coursesFound.forEach(({ title }) => {
  //       const foundedCourse = clientCoursesData.find(({ course }) => course.title === title);

  //       if (foundedCourse) {
  //         setFoundInMyCoursesIds((prevState) => [
  //           ...prevState,
  //           {
  //             courseId: foundedCourse.course._id,
  //             clientCourseId: foundedCourse._id,
  //           },
  //         ]);
  //       }
  //     });
  //   }
  // }, [clientCoursesData, coursesFound]);

  return <SearchResult {...props} />;
};

export default SearchResultContainer;
