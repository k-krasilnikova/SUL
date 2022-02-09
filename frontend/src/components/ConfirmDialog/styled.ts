import styled from 'styled-components';
import { Dialog } from '@mui/material';

interface IDialog {
  width?: number | undefined;
  height?: number | undefined;
}

export const StyledDialog = styled(Dialog)<IDialog>(({ width, height }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '5px',
    boxShadow: 'none',
    minWidth: '660px !important',
    maxHeight: '335px !important',
    ...(width && {
      minWidth: `${width}px !important`,
    }),
    ...(height && {
      maxHeight: `${height}px !important`,
    }),
  },
}));
