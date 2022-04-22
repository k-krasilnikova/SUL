import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';

import { useSendTestResult, useGetCourseTest } from 'api/test';
import { useGetClientCourseInfo } from 'api/myCourses';
import {
  MAX_STAGE_INITIAL,
  MIN_STAGE,
  PERCENTAGE,
  STAGE_CHANGE,
  TEST_STATUS,
  MIN_TEST_DURATION,
} from 'constants/test';
import { PATHS } from 'constants/routes';
import { useToggle } from 'hooks';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { convertTestStatusToProgress } from 'utils/helpers/convertCourseStatusToProgress';
import { CourseStatus } from 'enums/course';

import PassingTest from './PassingTest';
import TestResult from './TestResult';
import ConfirmLeavePage from './ConfirmLeavePage';
import ConfirmTimeIsOver from './ConfirmTimeIsOver';
import { getDurationBetweenDates } from './utils';

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

  const testDuration = useMemo(
    () => getDurationBetweenDates(clientCourseResponse?.finishTestDate),
    [clientCourseResponse?.finishTestDate],
  );

  useEffect(() => {
    if (testDuration) {
      const timeoutId = setTimeout(() => {
        setTestTimeoutDialogOpen();
      }, testDuration);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [testDuration, setTestTimeoutDialogOpen]);

  const [stage, setStage] = useState(1);
  const [values, setValues] = React.useState({});

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const [isTestResultPageEnabled, setTestResultPageEnabled] = useState(false);
  const {
    mutate: sendTestResult,
    data: responseData,
    isLoading: sendTestResultIsLoading,
  } = useSendTestResult({
    courseId: params.courseId,
  });

  const submitResult = (isResultPageEnabled = true) => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({
        qN: Number(key),
        aN: Number(value),
      })),
    };
    sendTestResult(resultData);
    setTestResultPageEnabled(isResultPageEnabled);
  };

  const handleSubmitResult = () => {
    submitResult();
  };

  const handleCloseTimeIsOverDialog = () => {
    setTestTimeoutDialogOpen();
    submitResult(false);
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

  const isTestTimeOver = useMemo(
    () =>
      courseStatus === CourseStatus.testing &&
      getDurationBetweenDates(clientCourseResponse?.finishTestDate) < MIN_TEST_DURATION,
    [clientCourseResponse?.finishTestDate, courseStatus],
  );

  const isNotTestingCourseStatus =
    !clientCourseResponseIsLoading && courseStatus !== CourseStatus.testing;

  const isShouldRedirect = isNotTestingCourseStatus || isTestTimeOver;

  const [isLeavePageDialogOpen, setLeavePageDialogOpen] = useToggle();

  const handleConfirmLeavePageOpen = (): void => {
    setLeavePageDialogOpen();
  };

  const handleNavigateBack = (): void => {
    handleConfirmLeavePageOpen();
    naviagteTo(transformRoute(PATHS.myCourseDetails, params.courseId));
  };

  const testStatus = responseData ? responseData.result.testStatus : undefined;
  const isFailed = testStatus === TEST_STATUS.notPassed;
  const assessmentRequired = testStatus === TEST_STATUS.assessment;
  const percentageValue = responseData ? responseData?.result?.result * PERCENTAGE : undefined;

  const progressBarData = isFailed
    ? convertTestStatusToProgress(TEST_STATUS.failed, percentageValue)
    : convertTestStatusToProgress(TEST_STATUS.successful, percentageValue);

  if (isShouldRedirect && !isTestResultPageEnabled) {
    return <Navigate replace to={transformRoute(PATHS.myCourseDetails, params.courseId)} />;
  }

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
            testTitle={courseTest?.title}
            testDuration={testDuration}
            questionStageItem={questionStageItem}
            isLoading={courseTestResponseIsLoading}
            handleSubmitResult={handleSubmitResult}
            handleBackButtonClick={handleConfirmLeavePageOpen}
          />
          <ConfirmLeavePage
            isOpened={isLeavePageDialogOpen}
            isLoading={courseTestResponseIsLoading}
            handleCancelLeavePage={handleConfirmLeavePageOpen}
            handleLeavePage={handleNavigateBack}
          />
          <ConfirmTimeIsOver
            isOpened={isTestTimeoutDialogOpen}
            handleClose={handleCloseTimeIsOverDialog}
          />
        </>
      )}
      {isTestResultPageEnabled && (
        <TestResult
          progressBarData={progressBarData}
          assessment={assessmentRequired}
          isFailed={isFailed}
          isLoading={sendTestResultIsLoading}
          responseData={responseData}
          status={clientCourseResponse?.status}
        />
      )}
    </>
  );
};

export default PassingTestContainer;
