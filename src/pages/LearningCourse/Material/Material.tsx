import { FC } from 'react';

import PPViewer from 'components/PPViewer';
import { playVideo } from 'icons';
import { ContentElementType } from 'enums/materials';
import { TMaterialVariants } from 'types/materials';

import { MaterialWrapper, MaterialText, MaterialVideo } from './styled';

interface IProps {
  material: string;
  materialType: TMaterialVariants;
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
    ) : materialType === ContentElementType.presentation ? (
      <PPViewer link={material} />
    ) : (
      <MaterialText>{material}</MaterialText>
    )}
  </MaterialWrapper>
);

export default Material;
