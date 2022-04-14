import React from 'react';

import { Image } from 'components/Image';
import { SkillContainer, SkillImage, SkillName, SkillGroup } from './styled';

interface IProps {
  name: string;
  image?: string;
}

const SkillItem: React.FC<IProps> = ({ name, image }) => {
  return (
    <SkillContainer>
      <SkillImage>
        <Image imageUrl={image} />
      </SkillImage>
      <SkillName>{name}</SkillName>
      <SkillGroup>Group</SkillGroup>
    </SkillContainer>
  );
};
export default SkillItem;
