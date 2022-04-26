import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';

import { SkillContainer, ImageWrapper, SkillNameWrapper, SkillName } from './styled';
import { ISkillItemProps } from '../types';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={Size.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillNameWrapper>
      <SkillName>{name}</SkillName>
    </SkillNameWrapper>
  </SkillContainer>
);

export default SkillItem;
