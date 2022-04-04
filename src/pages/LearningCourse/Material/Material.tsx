import { FC } from 'react';

import { MATERIAL } from 'constants/materials';
import { playVideo } from 'icons';

import { MaterialWrapper, MaterialText, MaterialVideo } from './styled';

interface IProps {
  material: string;
  materialType: string;
  videoPreview: string | boolean;
}

const Material: FC<IProps> = ({ material, materialType, videoPreview }) => (
  <MaterialWrapper>
    {materialType === MATERIAL.video ? (
      <MaterialVideo
        url={material}
        playIcon={<img src={playVideo} alt="play" />}
        light={videoPreview}
        playing
        controls
        width="100%"
        height="680px"
        frameBorder="0"
      />
    ) : (
      <MaterialText>{material}</MaterialText>
    )}
  </MaterialWrapper>
);

export default Material;
