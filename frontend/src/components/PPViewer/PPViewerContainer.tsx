import React from 'react';
import PPViewer from './PPViewer';

interface IPPViewerContainer {
  link: string;
}

const PPViewerContainer: React.FC<IPPViewerContainer> = ({ link }) => {
  return <PPViewer link={link} />;
};

export default PPViewerContainer;
