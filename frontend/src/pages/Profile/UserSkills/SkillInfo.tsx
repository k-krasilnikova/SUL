import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';

import {
  HoverSkillInfoText,
  SkillInfo,
  SkillInfoFlex,
  ImageWrapper,
  SkillInfoTextWrapper,
  SkillInfoTextWidth,
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
  isShown?: boolean;
  showSkillInfo?: () => void;
  hideSkillInfo?: () => void;
}

const CourseMaterialInfo: React.FC<Props> = ({
  technologyTitle,
  stages,
  stagesCompleted,
  progress,
  imageUrl,
  isShown,
  showSkillInfo,
  hideSkillInfo,
}) => (
  <SkillInfo completed={stages === stagesCompleted}>
    <SkillInfoFlex>
      <ImageWrapper>
        <UserAvatar size={SIZE.xsmall} avatar={imageUrl} />
      </ImageWrapper>
      <SkillInfoTextWrapper>
        <SkillInfoTextWidth>
          <SkillInfoText onMouseEnter={showSkillInfo} onMouseLeave={hideSkillInfo}>
            {technologyTitle}
          </SkillInfoText>
          <SkillInfoStage>
            {stagesCompleted}/{stages}
          </SkillInfoStage>
        </SkillInfoTextWidth>
        {isShown && <HoverSkillInfoText>{technologyTitle}</HoverSkillInfoText>}
      </SkillInfoTextWrapper>
      <SkillProgress>
        <ProgressBar value={progress} size={SIZE.small} />
      </SkillProgress>
    </SkillInfoFlex>
  </SkillInfo>
);

export default CourseMaterialInfo;
