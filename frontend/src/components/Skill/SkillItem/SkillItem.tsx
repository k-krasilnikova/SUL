import { FC } from 'react';

import Avatar from 'components/Avatar';
import { SIZE } from 'constants/sizes';

import { ISkillItemProps } from '../types';
import { SkillContainer, ImageWrapper, SkillName, SkillGroup } from './styled';

const SkillItem: FC<ISkillItemProps> = ({ name, skillImage }) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={SIZE.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillName>{name}</SkillName>
    <SkillGroup>{name}</SkillGroup>
  </SkillContainer>
);
export default SkillItem;
