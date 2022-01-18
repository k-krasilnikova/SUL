import React, { useState } from 'react';
/* import { useParams } from 'react-router'; */

import { COURSE_TEXT, COURSE_DESCRIPTION } from 'constants/courseText';

import LearningCourse from './LearningCourse';

const LearningCourseContainer: React.FC = () => {
  /*
  const params = useParams();
  const { courseId } = params;
  const { data } = useGetLearnCourse(courseId);
  */
  const [stage, setStage] = useState(1);
  const [testEnabled, setTestEnabled] = useState(false);

  const maxStage = COURSE_TEXT.length;

  const stageForward = () => {
    if (stage < maxStage) {
      if (stage + 1 === maxStage && !testEnabled) {
        setTestEnabled(true);
      }
      setStage(stage + 1);
    }
  };
  const stageBack = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
  };

  return (
    <LearningCourse
      stage={stage}
      maxStage={maxStage}
      stageBack={stageBack}
      stageForward={stageForward}
      courseText={COURSE_TEXT}
      courseDescription={COURSE_DESCRIPTION}
      testEnabled={testEnabled}
    />
  );
};

export default LearningCourseContainer;
