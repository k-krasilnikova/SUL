import { styled } from '@mui/material';

import { ITooltipProps } from './types';

export const TooltipWrapper = styled('div')({
  position: 'relative',
});

export const Tooltip = styled('p')<ITooltipProps>(({ content }) => ({
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover:after': {
    position: 'absolute',
    content: `"${content}"`,
    bottom: '-30px',
    left: 0,
    padding: '4px 8px',
    fontSize: '12px',
    color: '#FFF',
    background: '#000',
  },
}));
