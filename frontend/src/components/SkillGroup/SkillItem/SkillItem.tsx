import { FC } from 'react';

import Avatar from 'components/Avatar';
import { Size } from 'enums/sizes';
import { Length, Numbers } from 'enums/numbers';

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
}) => {
  const shortSkillName =
    name.length > Length.maxSkillLength
      ? `${name.slice(Numbers.zero, Length.maxSkillLength)}...`
      : name;

  return (
    <SkillContainer>
      <ImageWrapper>
        <Avatar size={Size.submedium} avatar={skillImage} />
      </ImageWrapper>
      <SkillNameWrapper onMouseEnter={showSkillName} onMouseLeave={hideSkillName}>
        <SkillName>{shortSkillName}</SkillName>
        {isSkillNameShown && <HoverSkillName>{name}</HoverSkillName>}
      </SkillNameWrapper>
    </SkillContainer>
  );
};

export default SkillItem;
