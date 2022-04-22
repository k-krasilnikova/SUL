import { FC } from 'react';

import { getPreviewId } from 'utils/helpers/videoPlayer/getPreviewId';
import extractMaterial from 'utils/helpers/materials/extractMaterial';
import { IContentElement } from 'types/course';

import Material from './Material';

interface IProps {
  courseMaterial: IContentElement;
}

const MaterialContainer: FC<IProps> = ({ courseMaterial }) => {
  const { type: materialType } = courseMaterial;

  const material = extractMaterial(courseMaterial);

  const videoPreview = getPreviewId(material);

  return <Material material={material} materialType={materialType} videoPreview={videoPreview} />;
};

export default MaterialContainer;
