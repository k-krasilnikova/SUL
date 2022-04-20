import { FC } from 'react';
import GoogleSlides from 'react-google-slides';

import { IPPViewerProps } from './types';

const viewerContainerStyles = {
  width: '100%',
  border: 'none',
} as const;

const FIRST_SLIDE_POSITION = 1;

const PPViewer: FC<IPPViewerProps> = ({ link }) => (
  <GoogleSlides
    slidesLink={link}
    containerStyle={viewerContainerStyles}
    position={FIRST_SLIDE_POSITION}
    showControls
    loop
  />
);

export default PPViewer;
