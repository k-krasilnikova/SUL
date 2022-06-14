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
import { BackButton, InnerWrapper, PageWrapper } from './styled';

const CourseEditor: FC<ICourseEditorProps> = ({ courseData, courseEditorRef, ...props }) => (
  <PageTitle title="Course Editor">
    <PageWrapper ref={courseEditorRef}>
      <InnerWrapper>
        <BackButton
          variant="medium"
          color="primary"
          component={Link}
          to={transformRoute(PATHS.courseDetails, courseData?._id)}
        >
          {ButtonLabels.back}
        </BackButton>
        <EditorTabs {...props}>
          <DefinitionStep courseData={courseData} {...props} />
          <SkillsStep courseData={courseData} {...props} />
          <LessonsStep courseData={courseData} {...props} />
          <TestStep courseData={courseData} {...props} />
        </EditorTabs>
      </InnerWrapper>
    </PageWrapper>
  </PageTitle>
);

export default CourseEditor;
