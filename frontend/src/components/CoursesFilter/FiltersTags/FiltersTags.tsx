import { FC } from 'react';
import { FieldArray } from 'formik';

import { getFilterTagsLength } from 'components/CoursesFilter/utils';
import { getFilterSelectsConfig } from 'utils/helpers/coursesFilter';
import { IFiltersTagsProps } from 'components/CoursesFilter/types';

import { TagsListContainer, TagContainer, TagText, Cross } from './styled';

const FiltersTags: FC<IFiltersTagsProps> = ({ withStatusSelect, values }) => {
  const selectsConfig = getFilterSelectsConfig(withStatusSelect);
  const filtersLength = getFilterTagsLength(selectsConfig, values);

  if (!filtersLength) {
    return null;
  }

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
