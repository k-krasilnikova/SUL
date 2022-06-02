import { orderBy, sortBy } from 'lodash';

import {
  ICoursesMapElement,
  ICoursesMapResponse,
  IStackMapElement,
} from 'interfaces/response/response';

const sortCoursesMapElement = (mapElement: ICoursesMapElement): ICoursesMapElement => ({
  ...mapElement,
  courses: sortBy(mapElement.courses, ['isCompleted', 'title']),
});

const sortCoursesMap = (coursesMap: ICoursesMapElement[]): ICoursesMapElement[] =>
  coursesMap.map(sortCoursesMapElement);

const sortStackMapElement = (stackMapElement: IStackMapElement): IStackMapElement => ({
  ...stackMapElement,
  coursesMap: sortCoursesMap(stackMapElement.coursesMap),
});

const sortStackMap = (stackMap: IStackMapElement[]): IStackMapElement[] =>
  orderBy(stackMap, ['isPrimary', 'stack'], ['desc', 'asc']);

const sortCoursesMapResponse = (mapResponse: ICoursesMapResponse): ICoursesMapResponse => ({
  ...mapResponse,
  stackMap: sortStackMap(mapResponse.stackMap.map(sortStackMapElement)),
});

export { sortCoursesMapResponse };
