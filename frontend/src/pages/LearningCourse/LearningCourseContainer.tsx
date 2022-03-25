import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetClientCourseAndMaterials } from 'api/courses';
import { useStartClientCourse, usePassClientCourse } from 'api/myCourses';
import { optimizeLink } from 'utils/helpers/videoPlayer/videoLink';
import { getPreviewId } from 'utils/helpers/videoPlayer/getPreviewId';
import { defineMaterialType } from 'utils/helpers/defineMaterialType';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import { MATERIAL } from 'constants/materials';
import { COURSE_STATUSES } from 'constants/statuses';
import Loader from 'components/Loader';

import LearningCourse from './LearningCourse';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;

const LearningCourseContainer: React.FC = () => {
  const { courseId } = useParams();

  const [stage, setStage] = useState(1);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const { data: clientCourseAndMaterialsData, isLoading } =
    useGetClientCourseAndMaterials(courseId);

  const { mutate: startCourseMutate } = useStartClientCourse(courseId);
  const { mutate: passCourseMutate } = usePassClientCourse(courseId);

  const [clientCourseResponse, courseMaterialsResponse] = clientCourseAndMaterialsData || [];

  const maxStage = courseMaterialsResponse
    ? courseMaterialsResponse.materials.length
    : MAX_STAGE_INITIAL;

  useEffect(() => {
    if (stage > MIN_STAGE) {
      setBackDisabled(false);
    } else {
      setBackDisabled(true);
    }
    if (stage < maxStage) {
      setForwardDisabled(false);
    } else {
      setForwardDisabled(true);
    }
  }, [stage, maxStage]);

  useEffect(() => {
    if (clientCourseResponse?.status === COURSE_STATUSES.approved) {
      startCourseMutate(courseId);
    }
  }, [clientCourseResponse?.status, courseId, startCourseMutate]);

  const stageForward = () => {
    setStage(stage + STAGE_CHANGE);
    if (clientCourseResponse?.status === COURSE_STATUSES.started) {
      passCourseMutate(stage);
      if (stage + STAGE_CHANGE === maxStage) {
        passCourseMutate(maxStage);
      }
    }
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const courseDescription = clientCourseResponse?.course.description
    ? { title: clientCourseResponse?.course.title, info: clientCourseResponse?.course.description }
    : undefined;

  const materialType = courseMaterialsResponse
    ? defineMaterialType(courseMaterialsResponse.materials[stage - 1].content[CONTENT_ELEMENT])
    : MATERIAL.text;
  const material =
    materialType === MATERIAL.video && courseMaterialsResponse
      ? optimizeLink(courseMaterialsResponse.materials[stage - 1].content[CONTENT_ELEMENT])
      : courseMaterialsResponse?.materials[stage - 1].content[CONTENT_ELEMENT] || MATERIAL.text;
  const videoPreview = getPreviewId(material);

  const toggleDescriptionOpen = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const checkProgress = useCallback(
    () => isProgressCompleted(clientCourseResponse?.progress),
    [clientCourseResponse?.progress],
  );

  if (isLoading) {
    return <Loader color="primary" />;
  }

  return (
    <>
      {courseMaterialsResponse && (
        <LearningCourse
          key={courseMaterialsResponse.materials[stage - 1]._id}
          stage={stage}
          maxStage={maxStage}
          stageBack={stageBack}
          stageForward={stageForward}
          courseDescription={courseDescription}
          backDisabled={backDisabled}
          forwardDisabled={forwardDisabled}
          material={material}
          clientCourse={clientCourseResponse}
          materialType={materialType}
          videoPreview={videoPreview}
          isProgressCompleted={checkProgress()}
          isDescriptionOpen={isDescriptionOpen}
          toggleDescriptionOpen={toggleDescriptionOpen}
        />
      )}
    </>
  );
};

export default LearningCourseContainer;
