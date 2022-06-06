// import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';

const useGetCoursesFilters = (withStatus?: boolean) => {
  const [searchParams] = useSearchParams();

  const coursesFilters = {
    order: searchParams.get('order') === 'true',
  };

  const selectsConfig = getFilterSelectsConfig(withStatus);

  selectsConfig.map((configName) => {
    coursesFilters[configName] = searchParams.getAll(`${configName}`);
  });

  return coursesFilters;
};

export default useGetCoursesFilters;
