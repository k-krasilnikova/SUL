import React from 'react';

import EditorTabs from 'components/EditorTabs';
import { AuthorizedLayout } from 'components/Layout';
import Loader from 'components/Loader';
import { ICourse } from 'types/course';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';

interface IProps {
  basePath: string;
  courseData?: ICourse;
  isCourseDataLoading?: boolean;
}

const CourseEditor: React.FC<IProps> = ({ basePath, courseData, isCourseDataLoading }) => {
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
          defaultActiveTab="definition-setup"
          tabs={[
            {
              key: 'definition-setup',
              //   formRef: definitionForm,
              node: <DefinitionStep courseData={courseData} />,
            },
            {
              key: 'skills-setup',
              //   formRef: skillsForm,
              node: <SkillsStep />,
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
