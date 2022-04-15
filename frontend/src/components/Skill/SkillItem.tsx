import React from 'react';

import { SIZE } from 'constants/sizes';
import { UserAvatar } from '../Avatar';
import { SkillContainer, ImageWrapper, SkillName, SkillGroup } from './styled';

interface IProps {
  name: string;
  skillImage?: string;
}

const SkillItem: React.FC<IProps> = ({ name, skillImage }) => {
  return (
    <SkillContainer>
      <ImageWrapper>
        <UserAvatar size={SIZE.submedium} avatar={skillImage} />
      </ImageWrapper>
      <SkillName>{name}</SkillName>
      <SkillGroup>{name}</SkillGroup>
    </SkillContainer>
  );
};
export default SkillItem;
