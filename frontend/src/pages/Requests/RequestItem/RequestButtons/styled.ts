import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

import { CustomGrid } from '../styled';

export const ButtonsContainer = styled(CustomGrid)({
  justifyContent: 'space-between',
});

export const ActionButton = styled(Button)({
  height: '34px',
  width: '64px',
  '&.MuiButton-root': {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '14px',
  },
  [theme.breakpoints.down('xl')]: {
    marginLeft: '10px',
  },
  [theme.breakpoints.down(1200)]: {
    '&.MuiButton-root': {
      fontSize: '12px',
    },
  },
});

export const InterviewActionButton = styled(ActionButton)({
  height: '34px',
  width: '165px',
  '&.MuiButton-root': {
    padding: 0,
  },
});
