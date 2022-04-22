import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { ISkillsMapProps } from 'pages/SkillsMap/types';

import StackMap from './StackMap';
import { SkillsWrapper } from './styled';

const SkillsMap: FC<ISkillsMapProps> = ({ coursesMapResponse, isCoursesMapLoading }) => (
  <AuthorizedLayout pageName="Skills Map">
    <SkillsWrapper isLoading={isCoursesMapLoading}>
      {isCoursesMapLoading ? (
        <Loader color="primary" type="component" />
      ) : (
        <StackMap coursesMapResponce={coursesMapResponse} />
      )}
    </SkillsWrapper>
  </AuthorizedLayout>
);

export default SkillsMap;
