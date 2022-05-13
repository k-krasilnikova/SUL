import { FC } from 'react';

import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import { Loaders } from 'enums/loader';
import { ISkillsMapProps } from 'pages/SkillsMap/types';

import StackMap from './StackMap';
import { SkillsWrapper } from './styled';

const SkillsMap: FC<ISkillsMapProps> = ({ coursesMapResponse, isCoursesMapLoading }) => (
  <PageTitle title="Skills Map">
    <SkillsWrapper isLoading={isCoursesMapLoading}>
      {isCoursesMapLoading ? (
        <Loader type={Loaders.content} />
      ) : (
        <StackMap coursesMapResponce={coursesMapResponse} />
      )}
    </SkillsWrapper>
  </PageTitle>
);

export default SkillsMap;
