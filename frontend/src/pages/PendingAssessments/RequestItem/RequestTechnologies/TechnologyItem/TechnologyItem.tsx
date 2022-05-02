import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';
import { ITechnologyItemProps } from 'pages/PendingAssessments/types';

import { HoverSkillInfoText, TechnologyWrapper } from './styled';

const TechnologyItem: FC<ITechnologyItemProps> = ({
  technology,
  isInfoShown,
  showInfo,
  hideInfo,
}) => (
  <TechnologyWrapper onMouseEnter={showInfo} onMouseLeave={hideInfo}>
    <Avatar size={Size.xxsmall} avatar={technology.skill.image} />
    {isInfoShown && (
      <HoverSkillInfoText>{`${technology.skill.name}:
      (${technology.points}/${technology.skill.maxScore})`}</HoverSkillInfoText>
    )}
  </TechnologyWrapper>
);

export default TechnologyItem;