import { FC } from 'react';

import { IStackMapProps } from 'pages/SkillsMap/types';

import CourseMapForCurrentStack from './CourseMapForCurrentStack';
import { StackWrapper, StackName, CourseMapWrapper } from './styled';

const StackMap: FC<IStackMapProps> = ({ coursesMapResponce }) => {
  const { userRank, stackMap } = coursesMapResponce || {};

  return (
    <>
      {stackMap?.map(
        ({ stack: stackName, coursesMap: courseMapForCurrentStack, isPrimary: isPrimaryStack }) => (
          <StackWrapper>
            <StackName>{stackName}</StackName>
            <CourseMapWrapper>
              <CourseMapForCurrentStack
                courseMapForCurrentStack={courseMapForCurrentStack}
                userRank={userRank}
                isPrimaryStack={isPrimaryStack}
              />
            </CourseMapWrapper>
          </StackWrapper>
        ),
      )}
    </>
  );
};

export default StackMap;
