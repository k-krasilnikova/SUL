import { FC } from 'react';

import { MATERIAL } from 'constants/materials';
import { optimizeLink } from 'utils/helpers/videoPlayer/videoLink';
import { getPreviewId } from 'utils/helpers/videoPlayer/getPreviewId';
import { defineMaterialType } from 'utils/helpers/defineMaterialType';

import Material from './Material';

interface IProps {
  courseMaterial: string;
}

const MaterialContainer: FC<IProps> = ({ courseMaterial }) => {
  const materialType = defineMaterialType(courseMaterial);

  const material = materialType === MATERIAL.video ? optimizeLink(courseMaterial) : courseMaterial;

  const videoPreview = getPreviewId(material);

  return <Material material={material} materialType={materialType} videoPreview={videoPreview} />;
};

export default MaterialContainer;
