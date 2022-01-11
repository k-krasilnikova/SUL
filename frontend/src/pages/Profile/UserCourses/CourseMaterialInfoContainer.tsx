import React from 'react';

import { Material } from 'types/course';

import CourseMaterialInfo from './CourseMaterialInfo';

interface MaterialProps {
  material: Material;
}

const CourseMaterialInfoContainer: React.FC<MaterialProps> = ({ material }) => {
  let materialTitle = '';
  material.technology.forEach((technology, id) => {
    if (id < material.technology.length - 1) {
      materialTitle += `${technology}, `;
      return;
    } else {
      materialTitle += technology;
      return;
    }
  });
  const stages = material.content.length;
  let stagesCompleted = 0;
  material.content.forEach((stage) => {
    if (stage.isCompleted) stagesCompleted++;
  });
  const progress = (stagesCompleted / stages) * 100;
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
