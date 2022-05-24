import { FC } from 'react';

import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { ITechnologyItemProps } from 'pages/PendingAssessments/types';

import { TechnologyWrapper } from './styled';

const TechnologyItem: FC<ITechnologyItemProps> = ({ technology }) => {
  const { skill, points: technologyPoints } = technology || {};
  const { name: skillName, maxScore: skillMaxScore, image: skillImage } = skill || {};

  const skillScoreText = `${skillName}:
  (${technologyPoints}/${skillMaxScore})`;

  return (
    <Tooltip title={skillScoreText}>
      <TechnologyWrapper>
        <Avatar size={Size.xxsmall} avatar={skillImage} />
      </TechnologyWrapper>
    </Tooltip>
  );
};
export default TechnologyItem;
