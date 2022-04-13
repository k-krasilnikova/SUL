import React from 'react';
import GoogleSlides from 'react-google-slides';

interface IPPViewer {
  link: string;
}

const viewerContainerStyles = {
  width: '100%',
  border: 'none',
} as const;

const PPViewer: React.FC<IPPViewer> = ({ link }) => {
  return <GoogleSlides slidesLink={link} containerStyle={viewerContainerStyles} />;
};

export default PPViewer;
