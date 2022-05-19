import React from 'react';
import { Link } from 'react-router-dom';

import EditorTabs from 'components/EditorTabs';
import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';
import { ICourseEditorProps } from './types';
import { BackButton, InnerWrapper } from './styled';

const CourseEditor: React.FC<ICourseEditorProps> = ({
  formik,
  courseData,
  isCourseDataLoading,
}) => {
  return (
    <AuthorizedLayout pageName="Course Editor">
      {isCourseDataLoading ? (
        <Loader type="content" color="primary" />
      ) : (
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
            <DefinitionStep courseData={courseData} formik={formik} />
            <SkillsStep courseData={courseData} formik={formik} />
            <LessonsStep courseData={courseData} formik={formik} />
            <TestStep formik={formik} />
          </EditorTabs>
        </InnerWrapper>
      )}
    </AuthorizedLayout>
  );
};

export default CourseEditor;
