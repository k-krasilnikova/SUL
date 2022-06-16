import { FC } from 'react';
import { Formik, Form, Field } from 'formik';

import { SELECTS_OPTIONS } from 'components/CoursesFilter/constants';
import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';

import CustomSelect from './components/CustomSelect';
import CustomCheckbox from './components/CustomCheckbox';
import FiltersTags from './FiltersTags';
import AutoSetURLQueries from './AutoSetURLQueries';
import { ICoursesFilterProps } from './types';
import { FormWrapper, FieldsContainer } from './styled';

const CoursesFilter: FC<ICoursesFilterProps> = ({ initialValues, withStatusSelect }) => {
  const selectsConfig = getFilterSelectsConfig(withStatusSelect);

  return (
    <FormWrapper withStatusSelect={withStatusSelect}>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values }) => (
          <Form>
            <FieldsContainer>
              {selectsConfig.map((configName) => (
                <Field
                  as={CustomSelect}
                  name={configName}
                  options={SELECTS_OPTIONS[configName as keyof typeof SELECTS_OPTIONS]}
                />
              ))}
              <Field as={CustomCheckbox} name="order" checked={values.order} />
            </FieldsContainer>
            <FiltersTags withStatusSelect={withStatusSelect} values={values} />
            <AutoSetURLQueries />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CoursesFilter;
