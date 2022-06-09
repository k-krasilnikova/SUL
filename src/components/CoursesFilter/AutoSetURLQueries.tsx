/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from 'hooks';
import { ICoursesFilterValues, TCoursesFilterWithoutOrder } from 'types/course';

const DEBOUNCE_DELAY = 1000;

const AutoSetURLQueries = (): null => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { values } = useFormikContext<ICoursesFilterValues>();
  const debouncedValues = useDebounce(values, DEBOUNCE_DELAY);

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
