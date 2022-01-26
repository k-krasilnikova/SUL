import React, { useEffect, useState } from 'react';

import { COURSE_TEXT, COURSE_DESCRIPTION } from 'constants/courseText';

import LearningCourse from './LearningCourse';

const maxStage = COURSE_TEXT.length;
const minStage = 1;
const stageChange = 1;

const LearningCourseContainer: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [testEnabled, setTestEnabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);

  useEffect(() => {
    if (stage > minStage) {
      setBackDisabled(false);
    } else {
      setBackDisabled(true);
    }
    if (stage < maxStage) {
      setForwardDisabled(false);
    } else {
      setForwardDisabled(true);
    }
  }, [stage]);
  const stageForward = () => {
    if (stage < maxStage) {
      if (stage + stageChange === maxStage && !testEnabled) {
        setTestEnabled(true);
      }
      setStage(stage + stageChange);
    }
  };
  const stageBack = () => {
    if (stage > minStage) {
      setStage(stage - stageChange);
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
      backDisabled={backDisabled}
      forwardDisabled={forwardDisabled}
    />
  );
};

export default LearningCourseContainer;
