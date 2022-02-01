import styled from 'styled-components';
import { Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '5px',
    boxShadow: 'none',
    minWidth: '660px !important',
    maxHeight: '335px !important',
  },
});
