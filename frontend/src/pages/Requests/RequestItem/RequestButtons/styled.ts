import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

import { CustomGrid } from '../styled';

export const ButtonsContainer = styled(CustomGrid)({
  justifyContent: 'space-between',
  '& .MuiButton-root + .MuiButton-root': {
    marginLeft: '10px',
  },
});

export const ActionButton = styled(Button)({
  height: '38px',
  width: '64px',
  '&.MuiButton-root': {
    flexGrow: 1,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '14px',
  },
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    '&.MuiButton-root': {
      fontSize: '14px',
    },
  },
});

export const InterviewActionButton = styled(ActionButton)({
  width: '165px',
});
