import { FC } from 'react';
import { Link } from 'react-router-dom';

import EditorTabs from 'components/EditorTabs';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import PageTitle from 'components/PageTitle';
import transformRoute from 'utils/helpers/paths/transformRoute';

import DefinitionStep from 'pages/CourseEditor/DefinitionStep';
import SkillsStep from 'pages/CourseEditor/SkillsStep';
import LessonsStep from 'pages/CourseEditor/LessonsStep';
import TestStep from 'pages/CourseEditor/TestStep';
import { BackButton, InnerWrapper } from 'pages/CourseEditor/styled';

import { ICourseCreatorProps } from './types';

const CourseCreator: FC<ICourseCreatorProps> = ({
  courseDateCreateCourse,
  isCreateCourseMode,
  ...props
}) => (
  <PageTitle title="Create Course">
    <InnerWrapper>
      <BackButton
        variant="medium"
        color="primary"
        component={Link}
        to={transformRoute(PATHS.coursesList)}
      >
        {ButtonLabels.back}
      </BackButton>
      <EditorTabs {...props}>
        <DefinitionStep isCreateCourseMode={isCreateCourseMode} {...props} />
        <SkillsStep {...props} />
        <LessonsStep {...props} />
        <TestStep {...props} />
      </EditorTabs>
    </InnerWrapper>
  </PageTitle>
);

export default CourseCreator;
