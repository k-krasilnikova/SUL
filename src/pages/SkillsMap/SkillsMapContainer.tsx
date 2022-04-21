import { FC } from 'react';

import { useGetCoursesMap } from 'api/courses';

import SkillsMap from './SkillsMap';

const SkillsMapContainer: FC = () => {
  const { data: coursesMapResponse, isLoading: isCoursesMapLoading } = useGetCoursesMap();

  return (
    <SkillsMap coursesMapResponse={coursesMapResponse} isCoursesMapLoading={isCoursesMapLoading} />
  );
};

export default SkillsMapContainer;
