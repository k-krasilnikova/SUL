import { FC } from 'react';
import { Tooltip as MuiTooltip, TooltipProps as ITooltipProps } from '@mui/material';

const Tooltip: FC<ITooltipProps> = ({ children, ...props }) => (
  <MuiTooltip placement="top-start" {...props}>
    {children}
  </MuiTooltip>
);

export default Tooltip;
