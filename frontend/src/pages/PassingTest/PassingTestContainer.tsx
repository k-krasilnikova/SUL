import React, { useState } from 'react';
import { useParams } from 'react-router';

import { MAX_STAGE_INITIAL, MIN_STAGE, STAGE_CHANGE } from 'constants/test';
import { useSendTestResult, useStartCourseTest, useGetCourseTest } from 'api/test';

import PassingTest from './PassingTest';
import TestResult from './TestResult';

const PassingTestContainer: React.FC = () => {
  const params = useParams();

  const { data: courseData, isLoading } = useGetCourseTest({ courseId: params.courseId });

  useStartCourseTest({
    courseId: params.courseId,
    enabled: Boolean(courseData?.length),
  });

  const { mutate, data: responseData } = useSendTestResult({ courseId: params.courseId });

  const courseTest = courseData?.length ? courseData[0].test : undefined;
  const maxStage = courseTest ? courseTest.questions.length : MAX_STAGE_INITIAL;

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const [isTestResultPageEnabled, setTestResultPageEnabled] = useState(false);

  const handleSubmitResult = () => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({ qN: key, aN: value })),
    };
    mutate(resultData, { onSuccess: () => setTestResultPageEnabled(true) });
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
      {questionStageItem && !isTestResultPageEnabled && (
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
      {isTestResultPageEnabled && <TestResult responseData={responseData} />}
    </>
  );
};

export default PassingTestContainer;
