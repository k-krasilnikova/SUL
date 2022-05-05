import React from 'react';

import EditorTabs from 'components/EditorTabs';
import { AuthorizedLayout } from 'components/Layout';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';

interface IProps {
  basePath: string;
  formik: unknown;
}

const CourseEditor: React.FC<IProps> = ({ basePath, formik }) => {
  //   const definitionForm = useRef();
  //   const skillsForm = useRef();
  //   const lessonsForm = useRef();
  //   const testForm = useRef();

  return (
    <AuthorizedLayout pageName="Courses Editor">
      <EditorTabs
        basePath={basePath}
        defaultActiveTab="definition-setup"
        tabs={[
          {
            key: 'definition-setup',
            //   formRef: definitionForm,
            node: <DefinitionStep />,
          },
          {
            key: 'skills-setup',
            //   formRef: skillsForm,
            node: <SkillsStep />,
          },
          {
            key: 'lessons-setup',
            //   formRef: lessonsForm,
            node: <LessonsStep formik={formik} />,
          },
          {
            key: 'test-setup',
            //   formRef: testForm,
            node: <TestStep />,
          },
        ]}
      />
    </AuthorizedLayout>
  );
};

export default CourseEditor;
