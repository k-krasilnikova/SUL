import { useSearchParams } from 'react-router-dom';

import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';
import { ICoursesFilterValues, TCoursesFilterWithoutOrder } from 'types/course';

const useGetCoursesFilters = (
  withStatusSelect?: boolean,
): {
  coursesFilters: ICoursesFilterValues;
  isEmptyFilters: boolean;
} => {
  const [searchParams] = useSearchParams();

  const coursesFilters = {
    order: searchParams.get('order') === 'true',
  } as ICoursesFilterValues;

  const selectsConfig = getFilterSelectsConfig(withStatusSelect);

  let isEmptyFilters = true;

  selectsConfig.map((configName) => {
    const filterValue = searchParams.getAll(`${configName}`);

    if (filterValue.length) {
      isEmptyFilters = false;
    }

    coursesFilters[configName as keyof TCoursesFilterWithoutOrder] = filterValue;

    return null;
  });
  return { coursesFilters, isEmptyFilters };
};

export default useGetCoursesFilters;
