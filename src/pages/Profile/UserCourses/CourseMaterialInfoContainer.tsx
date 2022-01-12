import React from 'react';

import { Material } from 'types/course';

import CourseMaterialInfo from './CourseMaterialInfo';

interface MaterialProps {
  material: Material;
}

const PERCENTAGE = 100;

const CourseMaterialInfoContainer: React.FC<MaterialProps> = ({ material }) => {
  const materialTitle = material.technology.join(', ');
  const stages = material.content.length;
  let stagesCompleted = 0;
  material.content.forEach((stage) => {
    if (stage.isCompleted) {
      stagesCompleted++;
    }
  });
  const progress = (stagesCompleted / stages) * PERCENTAGE;
  return (
    <CourseMaterialInfo
      materialTitle={materialTitle}
      stages={stages}
      stagesCompleted={stagesCompleted}
      progress={progress}
    />
  );
};

export default CourseMaterialInfoContainer;
