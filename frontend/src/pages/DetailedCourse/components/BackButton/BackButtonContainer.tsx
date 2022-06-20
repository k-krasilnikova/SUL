import { FC } from 'react';

import { useGetCoursesPaths } from 'hooks';
import { IBackButtonContainer } from 'pages/DetailedCourse/types';

import BackButton from './BackButton';

const BackButtonContainer: FC<IBackButtonContainer> = (props) => {
  const { coursesPath, myCoursesPath } = useGetCoursesPaths();

  return <BackButton coursesPath={coursesPath} myCoursesPath={myCoursesPath} {...props} />;
};

export default BackButtonContainer;
