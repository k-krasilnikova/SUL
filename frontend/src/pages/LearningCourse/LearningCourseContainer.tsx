import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetClientCourseAndMaterials } from 'api/courses';
import { useStartClientCourse, usePassClientCourse } from 'api/myCourses';
import { useGetCourseTest, useStartCourseTest } from 'api/test';
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
  const { courseId } = useParams();

  const [stage, setStage] = useState(1);
  const [testEnabled, setTestEnabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: clientCourseAndMaterialsData, isLoading } =
    useGetClientCourseAndMaterials(courseId);

  const [clientCourseResponse, courseMaterialsResponse] = clientCourseAndMaterialsData || [];
  const { data: courseTestResponse } = useGetCourseTest({
    courseId,
    enabled: dialogOpen && clientCourseResponse?.status === COURSE_STATUSES.started,
  });

  const { mutate: startClienCourseMutate } = useStartClientCourse(courseId);
  const { mutate: startTestMutate } = useStartCourseTest(courseId);
  const { mutate: passCourseStageMutate } = usePassClientCourse(courseId);

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
    const handleStartCourse = () => {
      if (clientCourseResponse?.status === COURSE_STATUSES.approved) {
        startClienCourseMutate(courseId);
      }
    };
    handleStartCourse();
  }, [courseId, clientCourseResponse?.status, startClienCourseMutate]);

  const testTimeout = courseTestResponse && courseTestResponse[0]?.test?.timeout;

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

  const handleStartTest = () => {
    startTestMutate(courseId);
  };

  const handlePassCourseStage = (courseStage: number) => {
    passCourseStageMutate(courseStage);
  };

  const stageForward = () => {
    setStage(stage + STAGE_CHANGE);
    handlePassCourseStage(stage);
    if (stage + STAGE_CHANGE === maxStage && !testEnabled) {
      handlePassCourseStage(maxStage);
      setTestEnabled(true);
    }
  };

  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
          testEnabled={testEnabled}
          testTimeout={testTimeout}
          backDisabled={backDisabled}
          forwardDisabled={forwardDisabled}
          material={material}
          materialType={materialType}
          dialogOpen={dialogOpen}
          handleStartTest={handleStartTest}
          handleClickDialogOpen={handleClickDialogOpen}
          handleDialogClose={handleDialogClose}
          videoPreview={videoPreview}
          isDescriptionOpen={isDescriptionOpen}
          toggleDescriptionOpen={toggleDescriptionOpen}
        />
      )}
    </>
  );
};

export default LearningCourseContainer;
