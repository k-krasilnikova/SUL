import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useStartClientCourse, usePassClientCourse } from 'api/myCourses';
import { useGetClientCourseAndMaterials } from 'api/courses';
import { optimizeLink } from 'utils/helpers/videoPlayer/videoLink';
import { getPreviewId } from 'utils/helpers/videoPlayer/getPreviewId';
import { MATERIAL } from 'constants/materials';
import { defineMaterialType } from 'utils/helpers/defineMaterialType';
import Loader from 'components/Loader';
import { COURSE_STATUSES } from 'constants/statuses';

import LearningCourse from './LearningCourse';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;

const LearningCourseContainer: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const params = useParams();

  const { data: clientCourseAndMaterialsData, isLoading } = useGetClientCourseAndMaterials(
    params.courseId,
  );
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

  const { mutate: startCourseMutate } = useStartClientCourse(params.courseId);

  useEffect(() => {
    const handleStartCourse = () => {
      if (clientCourseResponse?.status === COURSE_STATUSES.approved) {
        startCourseMutate(params.courseId);
      }
    };
    handleStartCourse();
  }, [params.courseId, clientCourseResponse?.status, startCourseMutate]);

  const { mutate } = usePassClientCourse(params.courseId);

  const handlePassCourseStage = (courseStage: number) => {
    mutate(courseStage);
  };

  const stageForward = () => {
    setStage(stage + STAGE_CHANGE);
    handlePassCourseStage(stage);
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
          materialType={materialType}
          videoPreview={videoPreview}
          progress={clientCourseResponse?.progress}
          isDescriptionOpen={isDescriptionOpen}
          toggleDescriptionOpen={toggleDescriptionOpen}
        />
      )}
    </>
  );
};

export default LearningCourseContainer;
