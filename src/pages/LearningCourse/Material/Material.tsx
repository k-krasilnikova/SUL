import { FC } from 'react';

import { ContentElementType } from 'types/course';
import { playVideo } from 'icons';

import { MaterialWrapper, MaterialText, MaterialVideo } from './styled';

interface IProps {
  material: string;
  materialType: ContentElementType;
  videoPreview: string | boolean;
}

const Material: FC<IProps> = ({ material, materialType, videoPreview }) => (
  <MaterialWrapper>
    {materialType === ContentElementType.video ? (
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
