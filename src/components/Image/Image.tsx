import { FC } from 'react';

import { imageDefault } from 'icons';

import { ImageContainer, CurrentImage } from './styled';

interface Props {
  imageUrl?: string;
  newImage?: boolean;
}

const Image: FC<Props> = ({ imageUrl, newImage }) => (
  <ImageContainer>
    <CurrentImage src={imageUrl || newImage ? imageUrl : imageDefault} />
  </ImageContainer>
);

export default Image;
