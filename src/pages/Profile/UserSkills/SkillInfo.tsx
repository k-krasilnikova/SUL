import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';

import {
  SkillInfo,
  SkillInfoFlex,
  ImageWrapper,
  SkillInfoText,
  SkillProgress,
  SkillInfoStage,
} from './styled';

interface Props {
  technologyTitle: string;
  stages?: number;
  stagesCompleted?: number;
  progress?: number;
  imageUrl?: string;
}

const CourseMaterialInfo: React.FC<Props> = ({
  technologyTitle,
  stages,
  stagesCompleted,
  progress,
  imageUrl,
}) => (
  <SkillInfo completed={stages === stagesCompleted}>
    <SkillInfoFlex>
      <ImageWrapper>
        <UserAvatar size={SIZE.xsmall} avatar={imageUrl} />
      </ImageWrapper>
      <div style={{ width: '70px' }}>
        <SkillInfoText>{technologyTitle}</SkillInfoText>
        <SkillInfoStage>
          {stagesCompleted}/{stages}
        </SkillInfoStage>
      </div>
      <SkillProgress>
        <ProgressBar value={progress} size={SIZE.small} />
      </SkillProgress>
    </SkillInfoFlex>
  </SkillInfo>
);

export default CourseMaterialInfo;
