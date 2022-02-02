import React, { useState } from 'react';
import { useParams } from 'react-router';

import { INITIAL_TEST } from 'constants/test';

import PassingTest from './PassingTest';

const PassingTestContainer: React.FC = () => {
  const params = useParams();
  const MAX_STAGE_INITIAL = 1;
  const STAGE_CHANGE = 1;
  const maxStage = INITIAL_TEST ? INITIAL_TEST.questions.length : MAX_STAGE_INITIAL;

  const [stage, setStage] = useState(1);
  const [resultEnabled, setResultEnabled] = useState(false);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    if (stage < maxStage) {
      if (stage + STAGE_CHANGE === maxStage && !resultEnabled) {
        setResultEnabled(true);
      }
      setStage(stage + STAGE_CHANGE);
    }
  };

  const questionStageItem = INITIAL_TEST.questions[stage - 1];

  return (
    <PassingTest
      stage={stage}
      maxStage={maxStage}
      handleChange={handleChange}
      value={values}
      params={params}
      resultEnabled={resultEnabled}
      stageNext={stageNext}
      questionStageItem={questionStageItem}
    />
  );
};

export default PassingTestContainer;
