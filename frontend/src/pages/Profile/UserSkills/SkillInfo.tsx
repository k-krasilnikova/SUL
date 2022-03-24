import React, { useState } from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';

import {
  HoverSkillInfoText,
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
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <SkillInfo completed={stages === stagesCompleted}>
      <SkillInfoFlex>
        <ImageWrapper>
          <UserAvatar size={SIZE.small} avatar={imageUrl} />
        </ImageWrapper>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '70px' }}>
            <SkillInfoText
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              {technologyTitle}
            </SkillInfoText>
            <SkillInfoStage>
              {stagesCompleted}/{stages}
            </SkillInfoStage>
          </div>
          {isShown && <HoverSkillInfoText>{technologyTitle}</HoverSkillInfoText>}
        </div>
        <SkillProgress>
          <ProgressBar value={progress} size={SIZE.small} />
        </SkillProgress>
      </SkillInfoFlex>
    </SkillInfo>
  );
};

export default CourseMaterialInfo;
