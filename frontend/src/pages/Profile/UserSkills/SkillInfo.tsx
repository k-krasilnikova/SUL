import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { SIZE } from 'constants/sizes';

import { SkillInfo, SkillInfoFlex, SkillInfoText, SkillProgress, SkillInfoStage } from './styled';

interface Props {
  technologyTitle: string;
  stages?: number;
  stagesCompleted?: number;
  progress?: number;
}

const CourseMaterialInfo: React.FC<Props> = ({
  technologyTitle,
  stages,
  stagesCompleted,
  progress,
}) => (
  <SkillInfo completed={stages === stagesCompleted}>
    <SkillInfoFlex>
      <SkillProgress>
        <ProgressBar value={progress} size={SIZE.small} variant="skills" />
      </SkillProgress>
      <div style={{ width: 'fit-content' }}>
        <SkillInfoText>{technologyTitle}</SkillInfoText>
        <SkillInfoStage>
          {stagesCompleted}/{stages}
        </SkillInfoStage>
      </div>
    </SkillInfoFlex>
  </SkillInfo>
);

export default CourseMaterialInfo;
