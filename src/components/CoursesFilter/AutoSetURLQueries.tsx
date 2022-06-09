import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from 'hooks';
import { ICoursesFilterValues, TCoursesFilterWithoutOrder } from 'types/course';

const AutoSetURLQueries = (): null => {
  const setSearchParams = useSearchParams()[1];
  const { values } = useFormikContext<ICoursesFilterValues>();
  const debouncedValues = useDebounce(values, 1000);

  useEffect(() => {
    const copyDebouncedValues = { ...debouncedValues };

    if (!copyDebouncedValues.order) {
      delete copyDebouncedValues.order;
    }

    setSearchParams(copyDebouncedValues as TCoursesFilterWithoutOrder);
  }, [debouncedValues, setSearchParams]);

  return null;
};

export default AutoSetURLQueries;
