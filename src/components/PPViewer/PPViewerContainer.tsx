import { FC } from 'react';

import PPViewer from './PPViewer';

interface IPPViewerContainer {
  link: string;
}

const PPViewerContainer: FC<IPPViewerContainer> = ({ link }) => <PPViewer link={link} />;

export default PPViewerContainer;
