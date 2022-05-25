import React from 'react';
import { Link } from 'react-router-dom';

import EditorTabs from 'components/EditorTabs';
import Loader from 'components/Loader';
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

const CourseEditor: React.FC<ICourseEditorProps> = ({
  formik,
  courseData,
  isCourseDataLoading,
}) => {
  console.log('values', formik.values);
  return (
    <PageTitle title="Course Editor">
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
            <DefinitionStep
              courseData={courseData}
              formik={formik}
              isCourseDataLoading={isCourseDataLoading}
            />
            <SkillsStep
              courseData={courseData}
              formik={formik}
              isCourseDataLoading={isCourseDataLoading}
            />
            <LessonsStep
              courseData={courseData}
              formik={formik}
              isCourseDataLoading={isCourseDataLoading}
            />
            <TestStep
              courseData={courseData}
              formik={formik}
              isCourseDataLoading={isCourseDataLoading}
            />
          </EditorTabs>
        </InnerWrapper>
      )}
    </PageTitle>
  );
};

export default CourseEditor;
