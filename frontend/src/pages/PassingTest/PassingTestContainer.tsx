import React, { useState } from 'react';
import { useParams } from 'react-router';

import { INITIAL_TEST, MAX_STAGE_INITIAL, MIN_STAGE, STAGE_CHANGE } from 'constants/test';

import PassingTest from './PassingTest';

const PassingTestContainer: React.FC = () => {
  const params = useParams();

  const maxStage = INITIAL_TEST ? INITIAL_TEST.questions.length : MAX_STAGE_INITIAL;

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const resultEnabled = stage === maxStage;
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
      stageBack={stageBack}
      questionStageItem={questionStageItem}
    />
  );
};

export default PassingTestContainer;
