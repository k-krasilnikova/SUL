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
import ActionButtons from './ActionButtons';
import { ICourseEditorProps } from './types';
import { BackButton, InnerWrapper } from './styled';

const CourseEditor: React.FC<ICourseEditorProps> = ({
  formik,
  basePath,
  courseData,
  isCourseDataLoading,
}) => {
  //   const definitionForm = useRef();
  //   const skillsForm = useRef();
  //   const lessonsForm = useRef();
  //   const testForm = useRef();

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
          <EditorTabs
            basePath={basePath}
            defaultActiveTab="skills-setup"
            tabs={[
              {
                key: 'definition-setup',
                //   formRef: definitionForm,
                node: <DefinitionStep courseData={courseData} formik={formik} />,
              },
              {
                key: 'skills-setup',
                //   formRef: skillsForm,
                node: <SkillsStep courseData={courseData} formik={formik} />,
              },
              {
                key: 'lessons-setup',
                //   formRef: lessonsForm,
                node: <LessonsStep formik={formik} />,
              },
              {
                key: 'test-setup',
                //   formRef: testForm,
                node: <TestStep formik={formik} />,
              },
            ]}
          />
          <ActionButtons />
        </InnerWrapper>
      )}
    </AuthorizedLayout>
  );
};

export default CourseEditor;
