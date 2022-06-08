import { ICoursesFilterValues } from 'types/course';

export const getFilterTagsLength = (selectsConfig: string[], values: ICoursesFilterValues) =>
  selectsConfig.reduce((acc, currValue) => [...acc, ...values[currValue]], [] as string[]).length;
