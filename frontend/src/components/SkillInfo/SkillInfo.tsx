import { FC } from 'react';

import ProgressBar from 'components/ProgressBar';
import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';

import { ISkillInfoProps } from './types';
import { calculateSkillProgress } from './utils';
import {
  SkillInfoWrapper,
  ImageWrapper,
  SkillProgressWrapper,
  SkillInfoText,
  SkillInfoTitle,
  SkillInfoStage,
} from './styled';

const SkillInfo: FC<ISkillInfoProps> = ({ skillScore, skill }) => {
  const { name: technologyTitle, image, maxScore: maxStages } = skill;

  const progress = calculateSkillProgress(skillScore, maxStages);

  return (
    <SkillInfoWrapper completed={maxStages === skillScore}>
      <ImageWrapper>
        <Avatar size={Size.xsmall} avatar={image} />
      </ImageWrapper>
      <SkillInfoText>
        <Tooltip title={technologyTitle}>
          <SkillInfoTitle>{technologyTitle}</SkillInfoTitle>
        </Tooltip>
        <SkillInfoStage>
          {skillScore}/{maxStages}
        </SkillInfoStage>
      </SkillInfoText>
      <SkillProgressWrapper>
        <ProgressBar value={progress} size={Size.xsmall} />
      </SkillProgressWrapper>
    </SkillInfoWrapper>
  );
};

export default SkillInfo;
