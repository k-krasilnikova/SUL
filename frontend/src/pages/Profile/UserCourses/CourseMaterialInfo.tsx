import React from 'react';
import Typography from '@mui/material/Typography';

import { Material } from 'types/course';

import { MaterialInfo, CourseProgress } from './styled';

interface MaterialProps {
  material: Material;
}

const CourseMaterialInfo: React.FC<MaterialProps> = ({ material }) => {
  const stages = material.content.length;
  let stagesCompleted = 0;
  material.content.forEach((stage) => {
    if (stage.isCompleted) stagesCompleted++;
  });
  const progress = (stagesCompleted / stages) * 100;

  return (
    <MaterialInfo>
      <CourseProgress variant="determinate" value={progress} />
      <div>
        <Typography variant="body1" gutterBottom component="div">
          {material.technology}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {stagesCompleted}/{stages}
        </Typography>
      </div>
    </MaterialInfo>
  );
};

export default CourseMaterialInfo;
