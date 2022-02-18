import React, { useState } from 'react';
import { useParams } from 'react-router';

import { MAX_STAGE_INITIAL, MIN_STAGE, STAGE_CHANGE } from 'constants/test';
import useGetCourseTest from 'api/test/getCourseTest';
import { useSendTestResult, useStartCourseTest } from 'api/test';

import PassingTest from './PassingTest';

const PassingTestContainer: React.FC = () => {
  const params = useParams();

  const { data, isLoading } = useGetCourseTest({ courseId: params.courseId });

  useStartCourseTest({
    courseId: params.courseId,
    enabled: Boolean(data?.length),
  });

  const { mutate } = useSendTestResult({ courseId: params.courseId });

  const courseTest = data?.length ? data[0].test : undefined;
  const maxStage = courseTest ? courseTest.questions.length : MAX_STAGE_INITIAL;

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const handleSubmitResult = () => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({ qN: key, aN: value })),
    };
    mutate(resultData);
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const resultEnabled = stage === maxStage;
  const questionStageItem = courseTest?.questions[stage - 1];

  return (
    <>
      {questionStageItem && (
        <PassingTest
          stage={stage}
          maxStage={maxStage}
          handleChange={handleChange}
          value={values}
          params={params}
          resultEnabled={resultEnabled}
          stageNext={stageNext}
          stageBack={stageBack}
          testItem={courseTest}
          questionStageItem={questionStageItem}
          isLoading={isLoading}
          handleSubmitResult={handleSubmitResult}
        />
      )}
    </>
  );
};

export default PassingTestContainer;
