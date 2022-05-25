import { FC } from 'react';

import ProgressBar from 'components/ProgressBar/ProgressBar';
import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { ISkillInfoProps } from 'pages/Profile/types';
import { calculateSkillProgress } from 'pages/Profile/utils';

import {
  SkillInfoWrapper,
  SkillInfoFlex,
  ImageWrapper,
  SkillInfoTextWrapper,
  SkillInfoTextWidth,
  SkillInfoText,
  SkillProgress,
  SkillInfoStage,
} from './styled';

const SkillInfo: FC<ISkillInfoProps> = ({ skillItem }) => {
  const { score: stagesCompleted, skill } = skillItem;
  const { name: technologyTitle, image, maxScore: maxStages } = skill;

  const progress = calculateSkillProgress(stagesCompleted, maxStages);

  return (
    <SkillInfoWrapper completed={maxStages === stagesCompleted}>
      <SkillInfoFlex>
        <ImageWrapper>
          <Avatar size={Size.xsmall} avatar={image} />
        </ImageWrapper>
        <SkillInfoTextWrapper>
          <SkillInfoTextWidth>
            <Tooltip title={technologyTitle}>
              <SkillInfoText>{technologyTitle}</SkillInfoText>
            </Tooltip>
            <SkillInfoStage>
              {stagesCompleted}/{maxStages}
            </SkillInfoStage>
          </SkillInfoTextWidth>
        </SkillInfoTextWrapper>
        <SkillProgress>
          <ProgressBar value={progress} size={Size.small} />
        </SkillProgress>
      </SkillInfoFlex>
    </SkillInfoWrapper>
  );
};

export default SkillInfo;
