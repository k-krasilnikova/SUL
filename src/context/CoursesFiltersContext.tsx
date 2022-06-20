import { createContext } from 'react';

import { ICoursesFiltersContext } from './types';

const CoursesFiltersContext = createContext<ICoursesFiltersContext | Record<string, never>>({});

export default CoursesFiltersContext;
