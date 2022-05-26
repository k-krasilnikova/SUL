import { FC } from 'react';
import { Link } from 'react-router-dom';

import EditorTabs from 'components/EditorTabs';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import PageTitle from 'components/PageTitle';
import transformRoute from 'utils/helpers/paths/transformRoute';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';
import { ICourseEditorProps } from './types';
import { BackButton, InnerWrapper } from './styled';

const CourseEditor: FC<ICourseEditorProps> = ({ courseData, ...props }) => (
  <PageTitle title="Course Editor">
    <InnerWrapper>
      <BackButton
        variant="medium"
        color="primary"
        component={Link}
        to={transformRoute(PATHS.courseDetails, courseData?._id)}
      >
        {ButtonLabels.back}
      </BackButton>
      <EditorTabs>
        <DefinitionStep courseData={courseData} {...props} />
        <SkillsStep courseData={courseData} {...props} />
        <LessonsStep courseData={courseData} {...props} />
        <TestStep courseData={courseData} {...props} />
      </EditorTabs>
    </InnerWrapper>
  </PageTitle>
);

export default CourseEditor;
