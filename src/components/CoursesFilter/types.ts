import { FieldProps } from 'formik';

import { ICoursesFilterValues } from 'types/course';

export interface ICoursesFilterContainerProps {
  withStatusSelect?: boolean;
}

export interface ICoursesFilterProps extends ICoursesFilterContainerProps {
  initialValues: ICoursesFilterValues;
}

export interface ICustomSelectProps extends FieldProps {
  name: string;
  value: string;
  options: string[];
}

export interface IFiltersTagsProps extends Pick<ICoursesFilterProps, 'withStatusSelect'> {
  values: ICoursesFilterProps['initialValues'];
}
