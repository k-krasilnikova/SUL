import { useGetCoursesFilters } from 'hooks';

import CoursesFilter from './CoursesFilter';

const CoursesFilterContainer = ({ withStatusSelect, ...props }) => {
  const initialValues = useGetCoursesFilters(withStatusSelect);

  return (
    <CoursesFilter initialValues={initialValues} withStatusSelect={withStatusSelect} {...props} />
  );
};

export default CoursesFilterContainer;
