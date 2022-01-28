import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useGetClientCourseInfo from 'api/myCourses/getMyCourseInfo';
import { optimizeLink } from 'utils/helpers/videoLink';
import { MATERIAL } from 'constants/materials';
import { defineMaterialType } from 'utils/helpers/defineMaterialType';

import LearningCourse from './LearningCourse';

const minStage = 1;
const stageChange = 1;

const LearningCourseContainer: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [testEnabled, setTestEnabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);

  const params = useParams();
  const { data } = useGetClientCourseInfo(params.courseId);

  const maxStage = data ? data.course.materials.length : 1;

  useEffect(() => {
    if (stage > minStage) {
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
      if (stage + stageChange === maxStage && !testEnabled) {
        setTestEnabled(true);
      }
      setStage(stage + stageChange);
    }
  };
  const stageBack = () => {
    if (stage > minStage) {
      setStage(stage - stageChange);
    }
  };

  const courseDescription = data?.course.description
    ? { title: data?.course.title, info: data?.course.description }
    : null;

  const materialType = data
    ? defineMaterialType(data.course.materials[stage - 1].content[0])
    : MATERIAL.text;
  const material =
    materialType === MATERIAL.video && data
      ? optimizeLink(data.course.materials[stage - 1].content[0])
      : MATERIAL.text;

  return data ? (
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
    />
  ) : null;
};

export default LearningCourseContainer;
