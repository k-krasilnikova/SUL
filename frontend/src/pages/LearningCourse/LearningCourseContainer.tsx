import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useGetClientCourseInfo from 'api/myCourses/getMyCourseInfo';
import { optimizeLink } from 'utils/helpers/videoLink';
import { MATERIAL } from 'constants/materials';
import { defineMaterialType } from 'utils/helpers/defineMaterialType';

import LearningCourse from './LearningCourse';

const MIN_STAGE = 1;
const STAGE_CHANGE = 1;
const MAX_STAGE_INITIAL = 1;
const CONTENT_ELEMENT = 0;

const LearningCourseContainer: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [testEnabled, setTestEnabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);

  const params = useParams();
  const { data } = useGetClientCourseInfo(params.courseId);

  const maxStage = data ? data.course.materials.length : MAX_STAGE_INITIAL;

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

  const stageForward = () => {
    if (stage < maxStage) {
      if (stage + STAGE_CHANGE === maxStage && !testEnabled) {
        setTestEnabled(true);
      }
      setStage(stage + STAGE_CHANGE);
    }
  };
  const stageBack = () => {
    if (stage > MIN_STAGE) {
      setStage(stage - STAGE_CHANGE);
    }
  };

  const courseDescription = data?.course.description
    ? { title: data?.course.title, info: data?.course.description }
    : undefined;

  const materialType = data
    ? defineMaterialType(data.course.materials[stage - 1].content[CONTENT_ELEMENT])
    : MATERIAL.text;
  const material =
    materialType === MATERIAL.video && data
      ? optimizeLink(data.course.materials[stage - 1].content[CONTENT_ELEMENT])
      : MATERIAL.text;

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {data && (
        <LearningCourse
          key={data.course.materials[stage - 1]._id}
          stage={stage}
          maxStage={maxStage}
          stageBack={stageBack}
          stageForward={stageForward}
          courseDescription={courseDescription}
          testEnabled={testEnabled}
          backDisabled={backDisabled}
          forwardDisabled={forwardDisabled}
          material={material}
          materialType={materialType}
          dialogOpen={dialogOpen}
          handleClickDialogOpen={handleClickDialogOpen}
          handleDialogClose={handleDialogClose}
        />
      )}
    </>
  );
};

export default LearningCourseContainer;
