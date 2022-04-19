import React from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';

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
        <Avatar size={Size.xsmall} avatar={imageUrl} />
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
        <ProgressBar value={progress} size={Size.small} />
      </SkillProgress>
    </SkillInfoFlex>
  </SkillInfo>
);

export default CourseMaterialInfo;
