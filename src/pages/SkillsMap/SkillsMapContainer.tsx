import { FC } from 'react';

import { useGetCoursesMap } from 'api/courses';

import SkillsMap from './SkillsMap';

const SkillsMapContainer: FC = () => {
  const { data: coursesMapResponce, isLoading: isCoursesMapResponceLoading } = useGetCoursesMap();

  return (
    <SkillsMap
      coursesMapResponce={coursesMapResponce}
      isCoursesMapResponceLoading={isCoursesMapResponceLoading}
    />
  );
};

export default SkillsMapContainer;
