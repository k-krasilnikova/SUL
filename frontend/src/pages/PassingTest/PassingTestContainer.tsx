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
import { useToggle, useCallbackPrompt } from 'hooks';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { convertTestStatusToProgress } from 'utils/helpers/convertCourseStatusToProgress';
import { CourseStatus } from 'enums/course';
import { Numbers } from 'enums/numbers';
import { ConfirmLeavePage } from 'components/Dialogs';

import PassingTest from './PassingTest';
import TestResult from './TestResult';
import ConfirmTimeIsOver from './ConfirmTimeIsOver';
import { getDurationBetweenDates } from './utils';

const PassingTestContainer: React.FC = () => {
  const { courseId } = useParams();
  const navigateTo = useNavigate();

  const [isTestTimeoutDialogOpen, setTestTimeoutDialogOpen] = useToggle();
  const [isTestResultPageEnabled, setTestResultPageEnabled] = useState(false);
  const [isLeavePageDialogOpen, setLeavePageDialogOpen] = useState(false);
  const [stage, setStage] = useState(1);
  const [values, setValues] = useState({});

  const { data: courseTestResponse, isLoading: courseTestResponseIsLoading } = useGetCourseTest({
    courseId,
  });
  const { data: clientCourseResponse, isLoading: clientCourseResponseIsLoading } =
    useGetClientCourseInfo(courseId);

  const {
    mutate: sendTestResult,
    data: responseData,
    isLoading: sendTestResultIsLoading,
  } = useSendTestResult({
    clientCourseId: courseId,
  });

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

  const isTestTimeOver =
    getDurationBetweenDates(clientCourseResponse?.finishTestDate) < MIN_TEST_DURATION;

  const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(
    !isTestTimeOver && !isTestResultPageEnabled,
  );

  const courseTest = courseTestResponse?.length ? courseTestResponse[0].test : undefined;
  const maxStage = courseTest ? courseTest.questions.length : MAX_STAGE_INITIAL;
  const testStatus = responseData ? responseData.result.testStatus : undefined;
  const resultEnabled = stage === maxStage;
  const questionStageItem = courseTest?.questions[stage - Numbers.one];
  const assessmentRequired = testStatus === TEST_STATUS.assessment;
  const percentageValue = responseData ? responseData?.result?.result * PERCENTAGE : undefined;
  const courseStatus = clientCourseResponse?.status;
  const isTestEnded = useMemo(
    () =>
      courseStatus === CourseStatus.testing &&
      getDurationBetweenDates(clientCourseResponse?.finishTestDate) < MIN_TEST_DURATION,
    [clientCourseResponse?.finishTestDate, courseStatus],
  );
  const isNotTestingCourseStatus =
    !clientCourseResponseIsLoading && courseStatus !== CourseStatus.testing;
  const isShouldRedirect = isNotTestingCourseStatus || isTestEnded;
  const isFailed = testStatus === TEST_STATUS.notPassed;
  const progressBarData = isFailed
    ? convertTestStatusToProgress(TEST_STATUS.failed, percentageValue)
    : convertTestStatusToProgress(TEST_STATUS.successful, percentageValue);

  const handleChange = (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [qN]: event.target.value }));
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const stageNext = () => {
    setStage(stage + STAGE_CHANGE);
  };

  const submitResult = (isResultPageEnabled = true) => {
    const resultData = {
      testId: courseTest?._id,
      answers: Object.entries(values).map(([key, value]) => ({
        qN: Number(key),
        aN: Number(value),
      })),
      clientCourseId: courseId,
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
    navigateTo(transformRoute(PATHS.myCourseDetails, courseId));
  };

  const handleConfirmLeavePageOpen = (): void => {
    setLeavePageDialogOpen(true);
    navigateTo(transformRoute(PATHS.myCourseDetails, courseId));
  };

  const handleCancelLeavePage = (): void => {
    setLeavePageDialogOpen(false);
    cancelNavigation();
  };

  const handleNavigateBack = (): void => {
    setLeavePageDialogOpen(false);
    confirmNavigation();
  };

  if (isShouldRedirect && !isTestResultPageEnabled) {
    return <Navigate replace to={transformRoute(PATHS.myCourseDetails, courseId)} />;
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
            isOpened={isLeavePageDialogOpen || (showPrompt && !isNotTestingCourseStatus)}
            isLoading={courseTestResponseIsLoading}
            handleCancelLeavePage={handleCancelLeavePage}
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
