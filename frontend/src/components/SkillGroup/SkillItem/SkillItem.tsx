import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';

import { SkillContainer, ImageWrapper, SkillName, SkillGroup } from './styled';
import { ISkillItemProps } from '../types';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={Size.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillName>{name}</SkillName>
    <SkillGroup>{name}</SkillGroup>
  </SkillContainer>
);
export default SkillItem;
