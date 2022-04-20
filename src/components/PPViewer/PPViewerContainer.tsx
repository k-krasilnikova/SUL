import { FC } from 'react';

import PPViewer from './PPViewer';
import { IPPViewerContainer } from './types';

const PPViewerContainer: FC<IPPViewerContainer> = ({ link }) => <PPViewer link={link} />;

export default PPViewerContainer;
