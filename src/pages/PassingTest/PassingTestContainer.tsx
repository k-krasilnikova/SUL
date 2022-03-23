import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

import { useSendTestResult, useGetCourseTest } from 'api/test';
import { useFinishClientCourse, useGetClientCourseInfo } from 'api/myCourses';
import { MAX_STAGE_INITIAL, MIN_STAGE, STAGE_CHANGE } from 'constants/test';
import { PATHS } from 'constants/routes';
import { useToggle } from 'hooks';

import PassingTest from './PassingTest';
import TestResult from './TestResult';
import ConfirmLeavePage from './ConfirmLeavePage';
import ConfirmTimeIsOver from './ConfirmTimeIsOver';

const PassingTestContainer: React.FC = () => {
  const params = useParams();
  const naviagteTo = useNavigate();

  const { data: courseTestData, isLoading } = useGetCourseTest({ courseId: params.courseId });
  const { data: clientCourseResponse } = useGetClientCourseInfo(params.courseId);

  const courseTest = courseTestData?.length ? courseTestData[0].test : undefined;
  const maxStage = courseTest ? courseTest.questions.length : MAX_STAGE_INITIAL;

  const [isTestTimeoutDialogOpen, setTestTimeoutDialogOpen] = useToggle();

  useEffect(() => {
    if (courseTest?.timeout) {
      const timeoutId = setTimeout(() => {
        setTestTimeoutDialogOpen();
      }, courseTest?.timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [courseTest?.timeout, setTestTimeoutDialogOpen]);

  const handleCloseTimeIsOverDialog = () => {
    setTestTimeoutDialogOpen();
    naviagteTo(PATHS.myCourses);
  };

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const { mutate: sendFinishCourse } = useFinishClientCourse(params.courseId);
  const handleSendTestResult = () => sendFinishCourse(params.courseId);

  const [isTestResultPageEnabled, setTestResultPageEnabled] = useState(false);
  const { mutate, data: responseData } = useSendTestResult(
    { courseId: params.courseId },
    handleSendTestResult,
  );

  const handleSubmitResult = () => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({
        qN: Number(key),
        aN: Number(value),
      })),
    };
    mutate(resultData);
    setTestResultPageEnabled(true);
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };
  const resultEnabled = stage === maxStage;
  const questionStageItem = courseTest?.questions[stage - 1];

  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleConfirm = (): void => {
    setConfirmOpen(true);
  };
  const cancelLeavePage = (): void => {
    setConfirmOpen(false);
  };
  const handleLeavePage = (): void => {
    setConfirmOpen(false);
    naviagteTo(`${PATHS.myCourses}/${params.courseId}`);
  };

  return (
    <>
      {questionStageItem && !isTestResultPageEnabled && (
        <>
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
            handleConfirm={handleConfirm}
          />
          <ConfirmLeavePage
            isOpened={isConfirmOpen}
            handleCancelLeavePage={cancelLeavePage}
            handleLeavePage={handleLeavePage}
            isLoading={isLoading}
            size="small"
          />
          <ConfirmTimeIsOver
            isOpened={isTestTimeoutDialogOpen}
            handleClose={handleCloseTimeIsOverDialog}
            size="small"
          />
        </>
      )}
      {isTestResultPageEnabled && (
        <TestResult responseData={responseData} status={clientCourseResponse?.status} />
      )}
    </>
  );
};

export default PassingTestContainer;
