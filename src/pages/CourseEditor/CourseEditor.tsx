import React from 'react';

import EditorTabs from 'components/EditorTabs';
import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';
import { ICourseEditorProps } from './types';

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
              node: <LessonsStep />,
            },
            {
              key: 'test-setup',
              //   formRef: testForm,
              node: <TestStep />,
            },
          ]}
        />
      )}
    </AuthorizedLayout>
  );
};

export default CourseEditor;
