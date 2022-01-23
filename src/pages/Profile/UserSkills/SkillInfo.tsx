import React from 'react';

import { SkillInfo, SkillProgress, SkillInfoText } from './styled';

interface Props {
  technologyTitle: string;
  stages: number;
  stagesCompleted: number;
  progress: number;
}

const CourseMaterialInfo: React.FC<Props> = ({
  technologyTitle,
  stages,
  stagesCompleted,
  progress,
}) => (
  <SkillInfo>
    <SkillProgress variant="determinate" value={progress} />
    <div>
      <SkillInfoText variant="body1" gutterBottom>
        {technologyTitle}
      </SkillInfoText>
      <SkillInfoText variant="body2" gutterBottom>
        {stagesCompleted}/{stages}
      </SkillInfoText>
    </div>
  </SkillInfo>
);

export default CourseMaterialInfo;
