import { FC } from 'react';

import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';

import { SkillContainer, ImageWrapper, SkillNameWrapper, SkillName } from './styled';
import { ISkillItemProps } from '../types';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={Size.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillNameWrapper>
      <Tooltip title={name}>
        <SkillName>{name}</SkillName>
      </Tooltip>
    </SkillNameWrapper>
  </SkillContainer>
);

export default SkillItem;
