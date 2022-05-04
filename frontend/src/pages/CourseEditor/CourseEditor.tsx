import React from 'react';

import EditorTabs from 'components/EditorTabs';
import { AuthorizedLayout } from 'components/Layout';

import DefinitionStep from './DefinitionStep';
import SkillsStep from './SkillsStep';
import LessonsStep from './LessonsStep';
import TestStep from './TestStep';

interface IProps {
  basePath: string;
  formValues?: any;
}

const CourseEditor: React.FC<IProps> = ({ basePath, formValues }) => {
  //   const definitionForm = useRef();
  //   const skillsForm = useRef();
  //   const lessonsForm = useRef();
  //   const testForm = useRef();

  return (
    <AuthorizedLayout pageName="Courses Editor">
      <EditorTabs
        basePath={basePath}
        defaultActiveTab="lessons-setup"
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
            node: <LessonsStep formValues={formValues} />,
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
