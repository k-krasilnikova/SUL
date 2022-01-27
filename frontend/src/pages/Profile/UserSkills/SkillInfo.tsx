import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { SkillInfo, SkillInfoText, SkillProgress } from './styled';

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
  <SkillInfo completed={stages === stagesCompleted}>
    <SkillProgress style={{}}>
      <CircularProgressbar
        value={progress}
        styles={{ path: { stroke: '#1BC02C' }, trail: { stroke: '#d6d6d6' } }}
      />
    </SkillProgress>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '58px',
      }}
    >
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
