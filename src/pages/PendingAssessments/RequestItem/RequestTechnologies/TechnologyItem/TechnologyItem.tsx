import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';
import { ITechnologyItemProps } from 'pages/PendingAssessments/types';

import { HoverSkillInfoText, TechnologyWrapper } from './styled';

const TechnologyItem: FC<ITechnologyItemProps> = ({
  technology,
  isInfoShown,
  toggleFullInfoShown,
}) => {
  const { skill, points: technologyPoints } = technology || {};
  const { name: skillName, maxScore: skillMaxScore, image: skillImage } = skill || {};

  return (
    <TechnologyWrapper onMouseEnter={toggleFullInfoShown} onMouseLeave={toggleFullInfoShown}>
      <Avatar size={Size.xxsmall} avatar={skillImage} />
      {isInfoShown && (
        <HoverSkillInfoText>{`${skillName}:
      (${technologyPoints}/${skillMaxScore})`}</HoverSkillInfoText>
      )}
    </TechnologyWrapper>
  );
};
export default TechnologyItem;
