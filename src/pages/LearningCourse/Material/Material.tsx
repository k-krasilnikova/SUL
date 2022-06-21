import { FC } from 'react';

import PPViewer from 'components/PPViewer';
import { playVideo } from 'icons';
import { ContentElementType } from 'enums/materials';

import { MaterialWrapper, MaterialText, MaterialVideo, PlayVideoIcon } from './styled';
import { IMaterialProps } from '../types';

const Material: FC<IMaterialProps> = ({ material, materialType, videoPreview }) => (
  <MaterialWrapper>
    {materialType === ContentElementType.video ? (
      <MaterialVideo
        url={material}
        playIcon={<PlayVideoIcon src={playVideo} alt="play" />}
        light={videoPreview}
        playing
        controls
        width="100%"
        height="100%"
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
