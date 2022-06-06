import { Formik, Form, Field } from 'formik';

import { SELECTS_OPTIONS } from 'components/CoursesFilter/constants';
import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';

import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import FiltersTags from './FiltersTags';
import AutoSetURLQueries from './AutoSetURLQueries';

const CoursesFilter = ({ initialValues, withStatusSelect }) => {
  const selectsConfig = getFilterSelectsConfig(withStatusSelect);

  return (
    <Formik initialValues={initialValues}>
      {({ values }) => (
        <Form>
          {selectsConfig.map((configName) => (
            <Field as={CustomSelect} name={configName} options={SELECTS_OPTIONS[configName]} />
          ))}

          <Field as={CustomCheckbox} name="order" checked={values.order} />
          <FiltersTags withStatusSelect={withStatusSelect} />
          <AutoSetURLQueries />
        </Form>
      )}
    </Formik>
  );
};

export default CoursesFilter;
