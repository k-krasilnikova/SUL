import { useGetCoursesFilters } from 'hooks';

import CoursesFilter from './CoursesFilter';

const CoursesFilterContainer = ({ withStatusSelect }) => {
  const initialValues = useGetCoursesFilters(withStatusSelect);

  return <CoursesFilter initialValues={initialValues} withStatusSelect={withStatusSelect} />;
};

export default CoursesFilterContainer;
