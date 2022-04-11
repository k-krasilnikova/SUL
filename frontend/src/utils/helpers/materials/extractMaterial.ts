import { ContentElementType, IContentElement } from 'types/course';
import { optimizeLink } from '../videoPlayer/videoLink';

const extractMaterial = (contentElement: IContentElement): IContentElement['material'] => {
  switch (contentElement.type) {
    case ContentElementType.plain:
      return contentElement.material;
    case ContentElementType.video:
      return optimizeLink(contentElement.material);
    case ContentElementType.presentation:
      return contentElement.material;
    default:
      throw new Error(`Unknown content element type: ${contentElement.type}.`);
  }
};

export default extractMaterial;
