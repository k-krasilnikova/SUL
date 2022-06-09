import { ICoursesFilterValues, TCoursesFilterWithoutOrder } from 'types/course';

export const getFilterTagsLength = (
  selectsConfig: string[],
  values: ICoursesFilterValues,
): number =>
  selectsConfig.reduce(
    (acc, currValue) => [...acc, ...values[currValue as keyof TCoursesFilterWithoutOrder]],
    [] as string[],
  ).length;
