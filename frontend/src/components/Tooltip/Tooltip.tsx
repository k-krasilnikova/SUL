import { FC } from 'react';
import { Tooltip as MuiTooltip, TooltipProps as ITooltipProps, Fade } from '@mui/material';

const Tooltip: FC<ITooltipProps> = ({ children, ...props }) => (
  <MuiTooltip
    placement="top-start"
    enterTouchDelay={0}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 0 }}
    {...props}
  >
    {children}
  </MuiTooltip>
);

export default Tooltip;
