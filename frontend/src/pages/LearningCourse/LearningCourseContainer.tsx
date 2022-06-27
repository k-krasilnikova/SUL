import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetClientCourse, useGetCourseMaterials } from 'api/courses';
import { useStartClientCourse, usePassClientCourse } from 'api/myCourses';
import Loader from 'components/Loader';
import { useToggle, useGetCoursesPaths } from 'hooks';
import { CourseStatus } from 'enums/course';
import { Loaders } from 'enums/loader';
import { Numbers } from 'enums/numbers';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';

import LearningCourse from './LearningCourse';
import { getIsNextStageCompleted } from './utils';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;
const NULL_VARIABLE = null;

const LearningCourseContainer: React.FC = () => {
  const { courseId } = useParams();
  const { myCoursesPath } = useGetCoursesPaths();

  const [stage, setStage] = useState(1);

  const [isCourseInfoOpen, setCourseInfoOpen] = useToggle();

  const {
    data: clientCourse,
    isLoading: isClientCourseLoading,
    isFetching: isClientCourseFetching,
  } = useGetClientCourse(courseId);

  const { data: courseMaterialsData, isLoading: isCourseMaterialsDataLoading } =
    useGetCourseMaterials(clientCourse?.course._id);

  const { mutate: passCourseStageMutate, isLoading: isPassMutateLoading } =
    usePassClientCourse(courseId);

  const onSuccessStartClient = () => passCourseStageMutate(stage);

  const { mutate: startClientCourseMutate, isLoading: isStartMutateLoading } = useStartClientCourse(
    {
      courseId,
      onSuccess: onSuccessStartClient,
    },
  );

  useEffect(() => {
    if (clientCourse?.status === CourseStatus.approved) {
      startClientCourseMutate(NULL_VARIABLE);
    }
  }, [clientCourse?.status, startClientCourseMutate]);

  const isTestEnabled = useMemo(
    () => isProgressCompleted(clientCourse?.progress),
    [clientCourse?.progress],
  );

  const isResponsesDefined = clientCourse && courseMaterialsData;

  if (!isResponsesDefined) {
    return null;
  }

  const {
    course: { title: courseTitle, description: courseDescription },
  } = clientCourse;

  const courseInfo = { title: courseTitle, description: courseDescription };

  const { materials: courseMaterials } = courseMaterialsData;

  const courseContent = courseMaterials[stage - Numbers.one]?.content[CONTENT_ELEMENT];

  const maxStage = courseMaterials?.length || MAX_STAGE_INITIAL;

  const isLoading = isStartMutateLoading || isPassMutateLoading || isClientCourseFetching;
  const isBackDisabled = stage === MIN_STAGE || isLoading;
  const isForwardDisabled = stage === maxStage || isLoading;

  const handleStageForward = () => {
    const nextStage = stage + STAGE_CHANGE;
    const IsNextStageCompleted = getIsNextStageCompleted({
      nextStage,
      progress: clientCourse.progress,
    });
    const isPassStageAvailable =
      clientCourse?.status === CourseStatus.started &&
      !IsNextStageCompleted &&
      nextStage <= maxStage;

    if (isPassStageAvailable) {
      passCourseStageMutate(nextStage);
    }
    setStage(nextStage);
  };

  const handleStageBack = () => {
    setStage(stage - STAGE_CHANGE);
  };

  return isClientCourseLoading || isCourseMaterialsDataLoading ? (
    <Loader type={Loaders.content} />
  ) : (
    <LearningCourse
      key={courseMaterialsData?.materials[stage - Numbers.one].stage}
      stage={stage}
      maxStage={maxStage}
      courseInfo={courseInfo}
      clientCourse={clientCourse}
      courseMaterial={courseMaterials[stage - Numbers.one]}
      courseContent={courseContent}
      myCoursesPath={myCoursesPath}
      isBackDisabled={isBackDisabled}
      isCourseInfoOpen={isCourseInfoOpen}
      isLoading={isLoading}
      isForwardDisabled={isForwardDisabled}
      isTestEnabled={isTestEnabled}
      handleStageBack={handleStageBack}
      handleStageForward={handleStageForward}
      toggleCourseInfoOpen={setCourseInfoOpen}
    />
  );
};

export default LearningCourseContainer;
