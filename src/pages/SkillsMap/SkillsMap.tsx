import { FC } from 'react';

import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { ISkillsMapProps } from 'pages/SkillsMap/types';

import StackMap from './StackMap';
import { SkillsWrapper } from './styled';

const SkillsMap: FC<ISkillsMapProps> = ({ coursesMapResponce, isCoursesMapResponceLoading }) => {
  return (
    <AuthorizedLayout pageName="Skills Map">
      <SkillsWrapper isLoading={isCoursesMapResponceLoading}>
        {isCoursesMapResponceLoading ? (
          <Loader color="primary" type="component" />
        ) : (
          <StackMap coursesMapResponce={coursesMapResponce} />
        )}
      </SkillsWrapper>
    </AuthorizedLayout>
  );
};

export default SkillsMap;
