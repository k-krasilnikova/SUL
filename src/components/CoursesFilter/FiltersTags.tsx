import { FieldArray, useFormikContext } from 'formik';

import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';

const FiltersTags = ({ withStatusSelect }) => {
  const { values } = useFormikContext();

  const selectsConfig = getFilterSelectsConfig(withStatusSelect);

  return (
    <>
      {selectsConfig.map((configName) => (
        <FieldArray name={configName}>
          {({ remove }) => (
            <>
              {values[configName].map((value, index) => (
                <div key={value}>
                  <p>{value}</p>
                  <button onClick={() => remove(index)}>delete</button>
                </div>
              ))}
            </>
          )}
        </FieldArray>
      ))}
    </>
  );
};

export default FiltersTags;
