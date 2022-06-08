import { FC } from 'react';

import { useGetCoursesFilters } from 'hooks';

import CoursesFilter from './CoursesFilter';
import { ICoursesFilterContainerProps } from './types';

const CoursesFilterContainer: FC<ICoursesFilterContainerProps> = ({
  withStatusSelect,
  ...props
}) => {
  const { coursesFilters } = useGetCoursesFilters(withStatusSelect);

  return (
    <CoursesFilter initialValues={coursesFilters} withStatusSelect={withStatusSelect} {...props} />
  );
};

export default CoursesFilterContainer;
