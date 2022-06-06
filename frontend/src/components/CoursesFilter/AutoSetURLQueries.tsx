import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from 'hooks';

const AutoSetURLQueries = () => {
  const [_, setSearchParams] = useSearchParams();
  const { values } = useFormikContext();
  const debouncedValues = useDebounce(values, 1000);

  useEffect(() => {
    const copyDebouncedValues = { ...debouncedValues };

    if (!copyDebouncedValues.order) {
      delete copyDebouncedValues.order;
    }
    setSearchParams(copyDebouncedValues);
  }, [debouncedValues]);

  return null;
};

export default AutoSetURLQueries;
