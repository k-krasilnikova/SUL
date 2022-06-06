import { FC } from 'react';

import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { Numbers } from 'enums/numbers';
import { ISkillItemProps } from 'pages/Skills/types';

import { SkillContainer, ImageWrapper, SkillNameWrapper, SkillName } from './styled';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => {
  const NAME_MAX_LENGTH = 25;
  const shortSkillName =
    name.length > NAME_MAX_LENGTH ? `${name.slice(Numbers.zero, NAME_MAX_LENGTH)}...` : name;

  return (
    <SkillContainer>
      <ImageWrapper>
        <Avatar size={Size.submedium} avatar={skillImage} />
      </ImageWrapper>
      <SkillNameWrapper>
        <Tooltip title={shortSkillName}>
          <SkillName>{shortSkillName}</SkillName>
        </Tooltip>
      </SkillNameWrapper>
    </SkillContainer>
  );
};

export default SkillItem;
