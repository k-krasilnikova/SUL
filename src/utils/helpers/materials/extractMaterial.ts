import { ContentElementType, IContentElement } from 'types/course';

import { optimizeLink } from '../videoPlayer/videoLink';

const extractMaterial = (contentElement: IContentElement): IContentElement['material'] => {
  const { type: contentType, material: contentMaterial } = contentElement;

  const returnedContentMaterial = {
    [ContentElementType.plain]: contentMaterial,
    [ContentElementType.presentation]: contentMaterial,
    [ContentElementType.video]: optimizeLink(contentMaterial),
  };

  const extractedContentMaterial = returnedContentMaterial[contentType];

  if (!extractedContentMaterial) {
    throw new Error(`Unknown content element type: ${contentType}.`);
  }

  return extractedContentMaterial;
};

export default extractMaterial;
