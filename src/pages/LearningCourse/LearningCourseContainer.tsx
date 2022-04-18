import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetClientCourseAndMaterials } from 'api/courses';
import { useStartClientCourse, usePassClientCourse } from 'api/myCourses';
import Loader from 'components/Loader';
import { useToggle } from 'hooks';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import { CourseStatus } from 'enums/courseEnums';

import LearningCourse from './LearningCourse';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;

const LearningCourseContainer: React.FC = () => {
  const { courseId } = useParams();

  const [stage, setStage] = useState(1);

  const [isCourseInfoOpen, setCourseInfoOpen] = useToggle();

  const { data: clientCourseAndMaterials, isLoading: clientCourseAndMaterialsIsLoading } =
    useGetClientCourseAndMaterials(courseId);

  const { mutate: startClienCourseMutate, isLoading: isLoadingStart } =
    useStartClientCourse(courseId);
  const { mutate: passCourseStageMutate, isLoading: isLoadingPass } = usePassClientCourse(courseId);

  const [clientCourseResponse, courseMaterialsResponse] = clientCourseAndMaterials || [];

  useEffect(() => {
    if (clientCourseResponse?.status === CourseStatus.approved) {
      startClienCourseMutate(courseId);
    }
  }, [clientCourseResponse?.status, courseId, startClienCourseMutate]);

  const isTestEnabled = useMemo(
    () => isProgressCompleted(clientCourseResponse?.progress),
    [clientCourseResponse?.progress],
  );

  if (clientCourseAndMaterialsIsLoading) {
    return <Loader color="primary" />;
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

  const courseMaterial = courseMaterials[stage - 1]?.content[CONTENT_ELEMENT];

  const maxStage = courseMaterials?.length || MAX_STAGE_INITIAL;

  const handleStageForward = () => {
    const nextStage = stage + STAGE_CHANGE;

    setStage(nextStage);
    if (clientCourseResponse?.status === CourseStatus.started) {
      passCourseStageMutate(stage);
      if (nextStage === maxStage) {
        passCourseStageMutate(maxStage);
      }
    }
  };

  const handleStageBack = () => {
    setStage(stage - STAGE_CHANGE);
  };
  return (
    <LearningCourse
      key={courseMaterialsResponse.materials[stage - 1]._id}
      stage={stage}
      maxStage={maxStage}
      courseInfo={courseInfo}
      courseMaterial={courseMaterial}
      isBackDisabled={stage === MIN_STAGE}
      isCourseInfoOpen={isCourseInfoOpen}
      isLoading={isLoadingStart || isLoadingPass}
      isForwardDisabled={stage === maxStage}
      isTestEnabled={isTestEnabled}
      handleStageBack={handleStageBack}
      handleStageForward={handleStageForward}
      togglCourseInfOpen={setCourseInfoOpen}
      clientCourse={clientCourseResponse}
    />
  );
};

export default LearningCourseContainer;
