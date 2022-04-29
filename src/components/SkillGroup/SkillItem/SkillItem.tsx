import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';

import {
  SkillContainer,
  ImageWrapper,
  SkillNameWrapper,
  SkillName,
  HoverSkillName,
} from './styled';
import { ISkillItemProps } from '../types';

const SkillItem: FC<ISkillItemProps> = ({
  name,
  skillImage,
  isSkillNameShown,
  showSkillName,
  hideSkillName,
}) => (
  <SkillContainer>
    <ImageWrapper>
      <Avatar size={Size.submedium} avatar={skillImage} />
    </ImageWrapper>
    <SkillNameWrapper onMouseEnter={showSkillName} onMouseLeave={hideSkillName}>
      <SkillName>{name}</SkillName>
      {isSkillNameShown && <HoverSkillName>{name}</HoverSkillName>}
    </SkillNameWrapper>
  </SkillContainer>
);

export default SkillItem;
