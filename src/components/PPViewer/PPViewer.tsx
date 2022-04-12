import React from 'react';
import GoogleSlides from 'react-google-slides';

interface IPPViewer {
  link: string;
}

const PPViewer: React.FC<IPPViewer> = ({ link }) => {
  return (
    <GoogleSlides
      slidesLink={link}
      containerStyle={{
        width: '100%',
        border: 'none',
      }}
    />
  );
};

export default PPViewer;
