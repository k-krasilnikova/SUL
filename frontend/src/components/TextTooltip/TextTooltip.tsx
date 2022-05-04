import { FC } from 'react';

import { ITextTooltipProps } from './types';
import { TooltipWrapper, Tooltip } from './styled';

const TextTooltip: FC<ITextTooltipProps> = ({ children }) => (
  <TooltipWrapper>
    <Tooltip content={children}>{children}</Tooltip>
  </TooltipWrapper>
);
export default TextTooltip;
