import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetClientCourseAndMaterials } from 'api/courses';
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
    data: clientCourseAndMaterials,
    isLoading: isClientCourseAndMaterialsLoading,
    isFetching: isClientCourseAndMaterialsFetching,
  } = useGetClientCourseAndMaterials(courseId);

  const { mutate: passCourseStageMutate, isLoading: isPassMutateLoading } =
    usePassClientCourse(courseId);

  const onSuccessStartClient = () => passCourseStageMutate(stage);

  const { mutate: startClienCourseMutate, isLoading: isStartMutateLoading } = useStartClientCourse({
    courseId,
    onSuccess: onSuccessStartClient,
  });

  const [clientCourseResponse, courseMaterialsResponse] = clientCourseAndMaterials || [];

  useEffect(() => {
    if (clientCourseResponse?.status === CourseStatus.approved) {
      startClienCourseMutate(NULL_VARIABLE);
    }
  }, [clientCourseResponse?.status, startClienCourseMutate]);

  const isTestEnabled = useMemo(
    () => isProgressCompleted(clientCourseResponse?.progress),
    [clientCourseResponse?.progress],
  );

  if (isClientCourseAndMaterialsLoading) {
    return <Loader type={Loaders.content} />;
  }

  const isResponsesDefined = clientCourseResponse && courseMaterialsResponse;

  if (!isResponsesDefined) {
    return null;
  }

  const {
    course: { title: courseTitle, description: courseDescription },
  } = clientCourseResponse;

  const courseInfo = { title: courseTitle, description: courseDescription };

  const { materials: courseMaterials } = courseMaterialsResponse;

  const courseContent = courseMaterials[stage - Numbers.one]?.content[CONTENT_ELEMENT];

  const maxStage = courseMaterials?.length || MAX_STAGE_INITIAL;

  const isLoading =
    isStartMutateLoading || isPassMutateLoading || isClientCourseAndMaterialsFetching;
  const isBackDisabled = stage === MIN_STAGE || isLoading;
  const isForwardDisabled = stage === maxStage || isLoading;

  const handleStageForward = () => {
    const nextStage = stage + STAGE_CHANGE;
    const IsNextStageCompleted = getIsNextStageCompleted({
      nextStage,
      progress: clientCourseResponse.progress,
    });
    const isPassStageAvailable =
      clientCourseResponse?.status === CourseStatus.started &&
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

  return (
    <LearningCourse
      key={courseMaterialsResponse.materials[stage - Numbers.one].stage}
      stage={stage}
      maxStage={maxStage}
      courseInfo={courseInfo}
      clientCourse={clientCourseResponse}
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
