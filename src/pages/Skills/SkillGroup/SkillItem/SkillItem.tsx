import { FC } from 'react';

import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { ISkillItemProps } from 'pages/Skills/types';
import { getShortedSkillName } from 'pages/Skills/utils';

import { SkillContainer, ImageWrapper, SkillNameWrapper, SkillName } from './styled';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={Size.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillNameWrapper>
      <Tooltip title={name}>
        <SkillName>{getShortedSkillName(name)}</SkillName>
      </Tooltip>
    </SkillNameWrapper>
  </SkillContainer>
);

export default SkillItem;
