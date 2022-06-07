import { FieldArray } from 'formik';

import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';

import { TagsListContainer, TagContainer, TagText, Cross } from './styled';

const FiltersTags = ({ withStatusSelect, values }) => {
  const selectsConfig = getFilterSelectsConfig(withStatusSelect);

  return (
    <TagsListContainer>
      {selectsConfig.map((configName) => (
        <FieldArray name={configName}>
          {({ remove }) => (
            <>
              {values[configName].map((value, index) => (
                <TagContainer key={value} onClick={() => remove(index)}>
                  <TagText>{value}</TagText>
                  <Cross />
                </TagContainer>
              ))}
            </>
          )}
        </FieldArray>
      ))}
    </TagsListContainer>
  );
};

export default FiltersTags;
