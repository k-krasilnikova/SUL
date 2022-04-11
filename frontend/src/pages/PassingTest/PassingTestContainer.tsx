import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';

import { useSendTestResult, useGetCourseTest } from 'api/test';
import { useFinishClientCourse, useGetClientCourseInfo } from 'api/myCourses';
import { MAX_STAGE_INITIAL, MIN_STAGE, STAGE_CHANGE } from 'constants/test';
import { PATHS } from 'constants/routes';
import { COURSE_STATUSES } from 'constants/statuses';
import { useToggle } from 'hooks';
import transformRoute from 'utils/helpers/paths/transformRoute';

import PassingTest from './PassingTest';
import TestResult from './TestResult';
import ConfirmLeavePage from './ConfirmLeavePage';
import ConfirmTimeIsOver from './ConfirmTimeIsOver';
import { TO_MILLISECONDS_RATIO } from '../../constants/time';

const PassingTestContainer: React.FC = () => {
  const params = useParams();
  const naviagteTo = useNavigate();

  const { data: courseTestResponse, isLoading: courseTestResponseIsLoading } = useGetCourseTest({
    courseId: params.courseId,
  });
  const { data: clientCourseResponse, isLoading: clientCourseResponseIsLoading } =
    useGetClientCourseInfo(params.courseId);

  const courseTest = courseTestResponse?.length ? courseTestResponse[0].test : undefined;
  const maxStage = courseTest ? courseTest.questions.length : MAX_STAGE_INITIAL;

  const [isTestTimeoutDialogOpen, setTestTimeoutDialogOpen] = useToggle();

  useEffect(() => {
    if (courseTest?.timeout) {
      const timeoutId = setTimeout(() => {
        setTestTimeoutDialogOpen();
      }, courseTest?.timeout * TO_MILLISECONDS_RATIO);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [courseTest?.timeout, setTestTimeoutDialogOpen]);

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const { mutate: sendFinishCourse } = useFinishClientCourse(params.courseId);
  const handleFinishCourse = useCallback(
    () => sendFinishCourse(params.courseId),
    [params.courseId, sendFinishCourse],
  );

  const [isTestResultPageEnabled, setTestResultPageEnabled] = useState(false);
  const {
    mutate: sendTestResult,
    data: responseData,
    isLoading: sendTestResultIsLoading,
  } = useSendTestResult({
    courseId: params.courseId,
  });

  useEffect(() => {
    if (clientCourseResponse?.status === COURSE_STATUSES.successful) {
      handleFinishCourse();
    }
  }, [clientCourseResponse?.status, handleFinishCourse]);

  const handleSubmitResult = () => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({
        qN: Number(key),
        aN: Number(value),
      })),
    };
    sendTestResult(resultData);
    setTestResultPageEnabled(true);
  };

  const handleCloseTimeIsOverDialog = () => {
    setTestTimeoutDialogOpen();
    handleSubmitResult();
    naviagteTo(transformRoute(PATHS.myCourseDetails, params.courseId));
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };
  const resultEnabled = stage === maxStage;
  const questionStageItem = courseTest?.questions[stage - 1];
  const courseStatus = clientCourseResponse?.status;

  const isShouldRedirect =
    !clientCourseResponseIsLoading && courseStatus !== COURSE_STATUSES.testing;

  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleConfirm = (): void => {
    setConfirmOpen(true);
  };
  const cancelLeavePage = (): void => {
    setConfirmOpen(false);
  };
  const handleLeavePage = (): void => {
    setConfirmOpen(false);
    naviagteTo(transformRoute(PATHS.myCourseDetails, params.courseId));
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
            isLoading={courseTestResponseIsLoading}
            handleSubmitResult={handleSubmitResult}
            handleConfirm={handleConfirm}
          />
          <ConfirmLeavePage
            isOpened={isConfirmOpen}
            handleCancelLeavePage={cancelLeavePage}
            handleLeavePage={handleLeavePage}
            isLoading={courseTestResponseIsLoading}
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
        <TestResult
          isLoading={sendTestResultIsLoading}
          responseData={responseData}
          status={clientCourseResponse?.status}
        />
      )}
      {isShouldRedirect && !isTestResultPageEnabled && (
        <Navigate replace to={transformRoute(PATHS.myCourseDetails, params.courseId)} />
      )}
    </>
  );
};

export default PassingTestContainer;
