import React from 'react';

import { MaterialInfo, CourseProgress, MaterialInfoText } from './styled';

interface Props {
  materialTitle: string;
  stages: number;
  stagesCompleted: number;
  progress: number;
}

const CourseMaterialInfo: React.FC<Props> = ({
  materialTitle,
  stages,
  stagesCompleted,
  progress,
}) => (
  <MaterialInfo>
    <CourseProgress variant="determinate" value={progress} />
    <div>
      <MaterialInfoText variant="body1" gutterBottom>
        {materialTitle}
      </MaterialInfoText>
      <MaterialInfoText variant="body2" gutterBottom>
        {stagesCompleted}/{stages}
      </MaterialInfoText>
    </div>
  </MaterialInfo>
);

export default CourseMaterialInfo;
