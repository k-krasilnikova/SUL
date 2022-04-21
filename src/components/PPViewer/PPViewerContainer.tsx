import { FC } from 'react';

import PPViewer from './PPViewer';
import { IPPViewerProps } from './types';

const PPViewerContainer: FC<IPPViewerProps> = ({ link }) => <PPViewer link={link} />;

export default PPViewerContainer;
