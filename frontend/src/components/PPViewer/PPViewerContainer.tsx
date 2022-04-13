import React from 'react';

import PPViewer from './PPViewer';

interface IPPViewerContainer {
  link: string;
}

const PPViewerContainer: React.FC<IPPViewerContainer> = ({ link }) => <PPViewer link={link} />;

export default PPViewerContainer;
